type AnimeLayoutProps = {
  children: React.ReactNode;
};

const AnimeLayout = ({ children }: AnimeLayoutProps) => {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="bg-transparent/75 bg-[url(/images/nezuko.png)] bg-cover bg-fixed bg-center bg-no-repeat pt-14 md:bg-[url(/images/tanjiro.jpg)] md:pt-16">
      <div className="bg-gradient-to-b from-black/50 !to-fill-box backdrop-blur-sm md:from-transparent">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default AnimeLayout;
