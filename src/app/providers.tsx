"use client";

import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

type ProviderProps = {
  theme?: ThemeProviderProps;
  children: React.ReactNode;
  className?: string;
};

export function Providers({ children, theme, className }: ProviderProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push} className={className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
        {...theme}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
