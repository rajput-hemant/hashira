import Image from "next/image";
import { META } from "@consumet/extensions";

import CarouselSlider from "@/components/carousel";

const meta = new META.Anilist();

export default async function AnimeHomePage() {
  const data = await meta.fetchTrendingAnime();

  return (
    <div className="">
      <CarouselSlider className="h-96">
        {data.results.map((anime) => {
          return (
            <div key={anime.id} className="">
              <div className="">
                <Image
                  src={anime.cover ?? ""}
                  alt={
                    typeof anime.title === "string"
                      ? anime.title
                      : anime.title.english ?? ""
                  }
                  height={200}
                  width={200}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </CarouselSlider>
    </div>
  );
}
