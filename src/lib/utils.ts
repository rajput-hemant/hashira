import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges the given class names with the tailwind classes
 * @param inputs The class names to merge
 * @returns The merged class names
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Parses a boolean value from a string
 * @param value The value to parse
 * @returns The parsed boolean value
 */
export function parseBool(value: string | number) {
  return ["true", "1"].includes(`${value}`.toLowerCase().trim());
}
