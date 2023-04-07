import { Metadata } from "next";

import { overpass } from "@/lib/fonts";
import { Providers } from "./providers";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={overpass.className}>
      <body className="bg-slate-100 dark:bg-grey-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
