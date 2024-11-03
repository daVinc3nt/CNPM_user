import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google" 
import CredentialsProvider from 'next-auth/providers/credentials'
import { AccountOperation, AuthOperation } from "@/engonow-library/main"
import { NextAuthOptions } from "next-auth"
import { cookies } from 'next/headers'
import Cookies from 'js-cookie';
import axios from "axios"
const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "sagar" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials) {
              //here custom logic will go to check that user is in db and credentials are correct
              if (!credentials || !credentials.username || !credentials.password)
                  return null;
              const Auth = new AuthOperation()
              Auth.setLanguage(Cookies.get("NEXT_LOCALE"))
              const {username, password} = credentials
              ////console.log(username,password)
              const res = await Auth.login({ identifier: username, password: password })
              return res.data as any
            }
          })
    ],
    pages:{
      signIn: '/login',
      error: '/error'
    },
    callbacks: {
      async jwt({ token, account, user }) {
        if (account) {
          token = Object.assign({}, token, {
            myToken: account.access_token,
          });
          cookies().set('gid', account.access_token, { secure: true, httpOnly: false, sameSite: 'none', domain: '.engonow.com' });
          const auth = new AuthOperation();
          auth.setLanguage(Cookies.get("NEXT_LOCALE"))
          const refreshToken = await auth.refreshToken();
          
          token.firstName= user.firstName
          token.lastName= user.lastName
          token.username=user.username
        }
        return token;
      },
      async session({ session, token }) {
        console.log(token)
        if (session) {
          session = Object.assign({}, session, {
            accessToken: token.myToken,
          });
          session = Object.assign({}, session, {
            accessToken: token,
          });
          session.user.firstName=token.firstName
          session.user.lastName=token.lastName
          session.user.username=token.username
          session.user.id =token.sub
        }
        return session;
      },
      async signIn({ user, account, profile, email, credentials }) {

        cookies().set('gid', "", { expires: new Date(0), secure: true, httpOnly: false, sameSite: 'none', domain: '.engonow.com' });
        cookies().set('sid', "", { expires: new Date(0), secure: true, httpOnly: false, sameSite: 'none', domain: '.engonow.com' });
        cookies().set('refresh_token', "", { expires: new Date(0), secure: true, httpOnly: false, sameSite: 'none', domain: '.engonow.com' });
        cookies().set('uid', "", { expires: new Date(0), secure: true, httpOnly: false, sameSite: 'none', domain: '.engonow.com' });

        let userEmail = "";

        if (profile && profile.email) {
          userEmail = profile.email; // Try accessing from profile
        } else if (user && user.email) {
          userEmail = user.email; // Try accessing from user
        }

        if(userEmail.length == 0) {
          return false;
        }
        try {
          const res = await fetch('https://api.engonow.com/v1/accounts/check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail }),
          });
          const resultCheckingExistAccount = await res.json();
          console.log(res)
          // const accountOperation = new AccountOperation();
          // const resultCheckingExistAccount = await accountOperation.checkExist({ email: userEmail });

          if(resultCheckingExistAccount.data) {
            Cookies.set("check", "true")
            throw new Error("Xin vui lòng điền tên và mật khẩu!")
            // return true
          }        
        } catch (error) {
          console.error("Error during signIn:", error);
          return false;
          // Cookies.set("check", "true")
          // return true
        }
        return true
      }
    },

}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}