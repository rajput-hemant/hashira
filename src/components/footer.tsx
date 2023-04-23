import SocialNav from "@/components/navbar/social-nav";
import { Subtle } from "@/components/ui/topography";

const Footer = () => {
  return (
    <footer className="container border-t border-zinc-600 pb-12 md:pb-0">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center py-6 text-center">
        <Subtle className="!leading-none text-fill-light">
          <span className="font-bold text-white">hashira</span>
          <span className="text-yellow-500">. </span>
          is not affiliated with or endorsed by any of the anime studios behind
          the creation of the anime presented on this site. This website is only
          a user interface presenting/linking various self-hosted files across
          the internet by other third-party providers for easy access.
        </Subtle>

        <SocialNav />

        <span>Released under the MIT License.</span>

        <span>Made with ❤️ using Next.js 13 & Consumet.ts</span>
      </div>
    </footer>
  );
};

export default Footer;
