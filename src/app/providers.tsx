"use client";

import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <SessionProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SessionProvider>

      <Toaster />

      <Analytics />
    </>
  );
};

export default Providers;
