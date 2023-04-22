import SocialNav from "@/components/navbar/social-nav";
import { Separator } from "@/components/ui/separator";
import { Small } from "@/components/ui/topography";

const Footer = () => {
  return (
    <div className="container my-6 border-t border-zinc-600 pb-14 md:pb-0">
      <footer className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2 pt-2 text-center">
        <SocialNav />

        <Separator />

        <Small className="!leading-none text-fill-light">
          <span className="font-bold text-white">hashira</span>
          <span className="text-yellow-500">. </span>
          is not affiliated with or endorsed by any of the anime studios behind
          the creation of the anime presented on this site. This website is only
          a user interface presenting/linking various self-hosted files across
          the internet by other third-party providers for easy access.
        </Small>

        <span>Released under the MIT License.</span>

        <span>Made with ❤️ using Next.js 13 & Consumet.ts</span>
      </footer>
    </div>
  );
};

export default Footer;
