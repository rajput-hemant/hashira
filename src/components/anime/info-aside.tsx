import React from "react";
import { FuzzyDate, IAnimeInfo } from "@consumet/extensions";

import { Small, Subtle } from "../ui/topography";

type InfoSidebarProps = {
  anime: IAnimeInfo;
};

const InfoSidebar = ({ anime }: InfoSidebarProps) => {
  const formatDate = (fuzzyDate?: FuzzyDate) => {
    if (!fuzzyDate) return "N/A";

    const date = new Date(
      fuzzyDate.year ?? 1970,
      (fuzzyDate.month ?? 1) - 1,
      fuzzyDate.day ?? 1
    );

    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  const createList = (items?: string[]) => {
    if (!items) return <span>N/A</span>;

    const listItems = items.map((item, i) => (
      <li key={i} className="list-none capitalize">
        {item}
      </li>
    ));

    return <ul className="list-inside">{listItems}</ul>;
  };

  return (
    <aside className="mt-[3.5rem] hidden w-72 flex-col gap-2 rounded-md border border-white/10 p-4 md:flex lg:w-80 xl:w-96">
      <div>
        <Small>Format</Small>
        <Subtle>{anime.type ?? "N/A"}</Subtle>
      </div>

      <div>
        <Small>Country Of Origin</Small>
        <Subtle>{anime.countryOfOrigin}</Subtle>
      </div>

      <div>
        <Small>Episodes</Small>
        <Subtle>{anime.totalEpisodes ?? "N/A"}</Subtle>
      </div>

      <div>
        <Small>Status</Small>
        <Subtle>{anime.status ?? "N/A"}</Subtle>
      </div>

      <div>
        <Small>Release Date</Small>
        <Subtle>{anime.releaseDate ?? "N/A"}</Subtle>
      </div>

      <div>
        <Small>Season</Small>
        <Subtle>{anime.season ?? "N/A"}</Subtle>
      </div>

      <div>
        <Small>Start Date</Small>
        <Subtle>{formatDate(anime.startDate)}</Subtle>
      </div>

      <div>
        <Small>End Date</Small>
        <Subtle>{formatDate(anime.endDate)}</Subtle>
      </div>

      <div>
        <Small>Rating</Small>
        <Subtle>{anime.rating ? anime.rating + "%" : "N/A"}</Subtle>
      </div>

      <div>
        <Small>Studios</Small>
        <Subtle>{createList(anime.studios)}</Subtle>
      </div>

      <div>
        <Small>Genres</Small>
        <Subtle>{createList(anime.genres)}</Subtle>
      </div>

      <div>
        <Small>Synonyms</Small>
        <Subtle>{createList(anime.synonyms)}</Subtle>
      </div>
    </aside>
  );
};

export default InfoSidebar;
