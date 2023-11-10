"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

export function Toaster() {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme as "dark" | "light" | "system"}
      position="bottom-right"
    />
  );
}
