import { IAnimeInfo } from "@consumet/extensions";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanHTML = (html: string) => {
  const text = html.replace(/<[^>]*>?/gm, "");

  return text ?? "";
};

export const getAnimeTitle = (anime: IAnimeInfo) => {
  if (typeof anime.title == "string") {
    return anime.title;
  } else {
    if (anime.title.english) return anime.title.english;
    else if (anime.title.romaji) return anime.title.romaji;
    else if (anime.title.native) return anime.title.native;
    else if (anime.title.userPreferred) return anime.title.userPreferred;
    else return "";
  }
};
