"use client";

import { useEffect, useState } from "react";
import { useSearch } from "@/hooks";
import { META } from "@consumet/extensions";

import { IAnimeResultV2 } from "@/types/anime";
import Swipercard from "@/components/swiper/swiper-card";
import { H1 } from "@/components/ui/topography";

const anilist = new META.Anilist();

const SearchPage = () => {
  const { query } = useSearch();
  const [searchResults, setSearchResults] = useState<IAnimeResultV2[] | null>(
    null
  );

  useEffect(() => {
    const search = async () => {
      const anime = await anilist.search(query);

      setSearchResults(anime.results);
    };

    const setTimer = setTimeout(() => {
      if (query.length !== 0) search();
    }, 500);

    return () => clearTimeout(setTimer);
  }, [query]);

  return (
    <>
      <H1 className="py-4 sm:py-6 md:py-8">Search Page</H1>

      <div className="grid-rows grid h-full w-full grid-cols-2 gap-8 py-4 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5 xl:grid-cols-6">
        {searchResults?.map((anime) => (
          <Swipercard
            key={anime.id}
            item={anime}
            className="mx-auto w-40 lg:w-48 xl:w-56"
          />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
