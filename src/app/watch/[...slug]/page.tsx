import { IEpisodeServer } from "@consumet/extensions";

import ArtPlayer from "@/components/player/art-player";

type WatchPageProps = {
  params: {
    slug: string[];
  };
};

const fetchEpisodes = async (id: string) => {
  try {
    const response =
      await fetch(`https://api.consumet.org/anime/gogoanime/watch/${id}
`);

    const episodes = await response.json();

    return episodes.sources as IEpisodeServer[];
  } catch (error) {
    throw error;
  }
};

const WatchPage = async ({ params: { slug } }: WatchPageProps) => {
  const id = slug[0];
  const title = slug[1];

  const episodes = await fetchEpisodes(title);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ArtPlayer url={episodes[0].url} className="aspect-video w-[800px]" />
    </div>
  );
};

export default WatchPage;
