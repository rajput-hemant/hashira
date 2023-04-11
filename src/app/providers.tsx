"use client";

import { SessionProvider } from "next-auth/react";

import { TooltipProvider } from "@/components/ui/tooltip";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
};

export default Providers;
