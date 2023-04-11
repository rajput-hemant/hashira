import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { overpass } from "@/lib/fonts";
import BottomNav from "@/components/navbar/bottom-nav";
import Navbar from "@/components/navbar/navbar";
import Providers from "./providers";
import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${overpass.className} text-white`}>
      <body className="bg-fill-box">
        <Providers>
          <Navbar />
          <BottomNav />

          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
