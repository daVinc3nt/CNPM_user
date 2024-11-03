import { Inter } from "next/font/google";
import "../globals.css";
import { Roboto } from "next/font/google";
import { SessionProvider } from "@/providers/SessionProvider";
import { Toaster, toast } from 'sonner'
import {NextIntlClientProvider} from 'next-intl';
import Favicon from '@/public/favicon.ico';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import { ReactNode } from "react";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const punycode = require('punycode/');


const roboto = Roboto({
	weight: ["300", "400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
type Props = {
	children: ReactNode;
	params: {locale: string};
  };
export async function generateMetadata({
	params: {locale}
  }: Omit<Props, 'children'>) {
	const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  
	return {
	  	title: "BKprinter",
	 	description: t("description"),
	};
  }
  
export default async function RootLayout({
	children,
	params: {locale}
  }: Props) {
	// Enable static rendering
	unstable_setRequestLocale(locale);

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
  
	return (
		<html className={roboto.className} lang={locale}>
			<body className="no-scrollbar hide-scrollbar">
				<NextIntlClientProvider messages={messages}>
				<Toaster closeButton  expand={false} richColors position="top-center" />
				{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}