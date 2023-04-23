import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { overpass } from "@/lib/fonts";
import Footer from "@/components/footer";
import BottomNav from "@/components/navbar/bottom-nav";
import Navbar from "@/components/navbar/navbar";
import Providers from "./providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${overpass.className} bg-fill-box text-white`}>
        <Providers>
          <Navbar />
          <BottomNav />

          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
