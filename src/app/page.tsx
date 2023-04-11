import { META } from "@consumet/extensions";

import Hero from "@/components/home/hero";

const getTrending = async () => {
  const meta = new META.Anilist();
  try {
    const trending = await meta.fetchTrendingAnime();

    return trending;
  } catch (error) {
    throw new Error(error as any);
  }
};

const Home = async () => {
  const trending = await getTrending();

  return (
    <div className="container">
      {/* hero */}
      <Hero trending={trending} />
    </div>
  );
};

export default Home;
