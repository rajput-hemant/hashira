import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Option from "artplayer/types/option";

type UsePlayer = (
  option: Option,
  getInstance?: (instance: Artplayer) => void
) => React.RefObject<HTMLDivElement>;

const usePlayer: UsePlayer = (option: Option, getInstance) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: playerRef.current ?? "",
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        // do not remove the container
        art.destroy(false);
      }
    };
  }, [option, getInstance]);

  return playerRef;
};

export default usePlayer;
