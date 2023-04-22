"use client";

import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import { store } from "@/store";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <SessionProvider>
        <Provider store={store}>
          <TooltipProvider>{children}</TooltipProvider>
        </Provider>
      </SessionProvider>

      <Toaster />

      <Analytics />
    </>
  );
};

export default Providers;
