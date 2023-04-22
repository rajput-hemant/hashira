import { use } from "react";
import { IAnimeInfo, META } from "@consumet/extensions";
import { Smile } from "lucide-react";

import { IAnimeResultV2 } from "@/types/anime";
import { Badge } from "../ui/badge";
import { Small } from "../ui/topography";

const anilist = new META.Anilist();

type AnimeInfoCardProps = {
  id: string;
};

// const getAnimeInfo = async (id: string) => {
//   try {
//     const anime = await anilist.fetchAnimeInfo(id);

//     return anime;
//   } catch (error) {
//     throw error;
//   }
// };

const AnimeInfoCard = ({ id }: AnimeInfoCardProps) => {
  const anime = use(anilist.fetchAnimeInfo(id));

  const getStudios = (anime: IAnimeInfo) => {
    if (anime.studios === undefined) return "N/A";

    if (typeof anime.studios === "string") {
      return anime.studios;
    } else {
      return anime.studios.join(", ");
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 p-2">
      <div className="flex justify-between">
        <Small>{anime.season ?? "N/A"}</Small>

        <div className="flex gap-1">
          <Smile className="text-green-600" /> {anime.rating ?? "N/A"}%
        </div>
      </div>

      <div className="flex flex-col">
        <Small>{getStudios(anime)}</Small>

        <p className="flex gap-2">
          <span>TV</span>

          {anime.totalEpisodes !== 0 && <>{anime.totalEpisodes} episodes</>}
        </p>
      </div>

      <div className=" flex gap-2">
        {(anime as IAnimeResultV2).genres?.splice(0, 3).map((genre) => (
          <Badge>{genre}</Badge>
        ))}
      </div>
    </div>
  );
};

export default AnimeInfoCard;
