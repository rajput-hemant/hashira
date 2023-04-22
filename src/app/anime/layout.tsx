type AnimeLayoutProps = {
  children: React.ReactNode;
};

const AnimeLayout = ({ children }: AnimeLayoutProps) => {
  return (
    <div className="bg-transparent/75 bg-[url(/images/nezuko.png)] bg-cover bg-fixed bg-no-repeat md:bg-[url(/images/tanjiro.jpg)]">
      <div className="bg-gradient-to-b from-black/50 !to-fill-box md:from-transparent">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default AnimeLayout;
