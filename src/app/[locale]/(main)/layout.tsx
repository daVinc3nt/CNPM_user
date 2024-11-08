import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import NavBar from "@/components/Navbar/Navbar";
import { FloatingNav } from "@/components/Navbar/FloatingNavbar";
import Footer from "@/components/Footer/footer";
import { SessionProvider } from "@/providers/SessionProvider";
import SidebarProvider from "@/providers/SidebarProvider";
import Sidebar from "@/components/sidebar";
import BuyPages from "@/components/BuyPages/buypages"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="no-scrollbar hide-scrollbar">
        <SidebarProvider>
          <SessionProvider>
            <FloatingNav />
            <Sidebar />
              {children} 
              <FloatingNav />
              {/* <BuyPages /> */}
            {/* <Footer/> */}
          </SessionProvider>
        </SidebarProvider> 
      </section>
  );
}
