"use client";

import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster />
    </SessionProvider>
  );
};

export default Providers;
