import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanHTML = (html: string) => {
  const text = html.replace(/<[^>]*>?/gm, "");

  return text ?? "";
};
