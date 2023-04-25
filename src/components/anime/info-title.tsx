import { IAnimeInfo } from "@consumet/extensions";
import { Share2 } from "lucide-react";

import { cn, getAnimeTitle } from "@/lib/utils";
import ShareDialog from "@/components/share-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { H2 } from "@/components/ui/topography";

type InfoTitleProps = {
  id: string;
  title: string;
  anime: IAnimeInfo;
  classname?: string;
};

const InfoTitle = ({ id, title, anime, classname }: InfoTitleProps) => {
  return (
    <div
      className={cn(
        "line-clamp-2 flex max-h-16 w-full items-center gap-2",
        classname
      )}
    >
      <H2 className="">{getAnimeTitle(anime)}</H2>

      {/* share dialog */}
      <Dialog>
        <DialogTrigger className="mb-auto ml-auto p-2">
          <Share2 className="h-6 w-6 text-white/50 hover:text-white" />
        </DialogTrigger>

        <DialogContent className="">
          <DialogHeader className="text-lg font-bold">
            Share This Show
          </DialogHeader>

          <ShareDialog
            url={`https://hashira.vercel.app/anime/info/${id}/${title}`}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InfoTitle;
