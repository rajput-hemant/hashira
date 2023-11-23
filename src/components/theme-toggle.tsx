"use client";

import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";
import { MoonFilledIcon, SunFilledIcon } from "@nextui-org/shared-icons";
import { useTheme } from "next-themes";

type ThemeToggleProps = ButtonProps;

export function ThemeToggle(props: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      title="Toggle theme"
      aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
      isIconOnly
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      <SunFilledIcon
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />

      <MoonFilledIcon
        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
