import { META } from "@consumet/extensions";

type WatchPageProps = {
  params: {
    slug: string[];
  };
};

const anilist = new META.Anilist();

const fetchEpisodes = async (id: string) => {
  const anime = await anilist.fetchEpisodesListById(id);

  return anime;
};

const WatchPage = ({ params: { slug } }: WatchPageProps) => {
  const id = slug[0];
  const title = slug[1];

  return (
    <div className="grid min-h-screen w-full place-items-center">
      {id} {title}
    </div>
  );
};

export default WatchPage;
