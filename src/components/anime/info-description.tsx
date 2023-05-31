"use client";

import { useState } from "react";
import { IAnimeInfo } from "@consumet/extensions";

import { cn } from "@/lib/utils";
import { H4 } from "../ui/topography";

type InfoDescriptionProps = {
  item: IAnimeInfo;
  className?: string;
};

const InfoDescription = ({ item, className }: InfoDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-center overflow-hidden py-2">
      <H4 className="font-semibold">Synopsis</H4>

      <div
        dangerouslySetInnerHTML={{ __html: item.description ?? "" }}
        className={cn(
          "h-52 overflow-hidden rounded-md leading-5",
          isExpanded && "h-auto"
        )}
      />

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mx-auto p-2 font-semibold text-fill-light hover:text-white"
      >
        {isExpanded ? "More Details" : "Fewer Details"}
      </button>
    </div>
  );
};

export default InfoDescription;
