"use client";

import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";

import { Moon, Sun } from "@/components/icons";

type ThemeToggleProps = ButtonProps;

export function ThemeToggle(props: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      isIconOnly
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      <Sun
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />

      <Moon
        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
