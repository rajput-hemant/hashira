import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import SocialNav from "@/components/navbar/social-nav";
import { buttonVariants } from "@/components/ui/button";
import { H1, H2, H3 } from "@/components/ui/topography";
import Kyojuro from "../../public/images/kyojuro-01.png";

const Home = () => {
  return (
    <div className="m-auto h-screen w-full max-w-7xl p-4 sm:p-8 md:p-10">
      <header className="m-auto h-14 w-full items-center">
        <nav className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <H2>
            hashira<span className="text-yellow-500">.</span>
          </H2>

          <div className="ml-auto flex gap-2">
            <SocialNav className="hidden md:flex" />

            <div
              className={cn(
                buttonVariants({ variant: "blue" }),
                "gap-2 rounded-full"
              )}
            >
              <Link href="/signup" className="font-bold">
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex w-full flex-col items-center md:p-10 lg:p-16">
        <H1 className="w-full bg-gradient-to-r  from-red-500 to-indigo-500 bg-clip-text py-6 text-center text-transparent">
          The new Ad-free anime platform
        </H1>

        <H3 className="text-center text-zinc-400">
          Stream Anime, Movies, TV Shows, read mangas online, and much more.
        </H3>

        <div className="m-4 h-64 md:h-72 lg:h-96">
          <Image
            src={Kyojuro}
            alt="Kyojuro Rengoku"
            className="h-full w-full object-contain"
          />
        </div>

        <Link href="/login" className="flex items-center text-xl">
          <div
            className={cn(
              buttonVariants({ variant: "blue" }),
              "gap-2 rounded-full p-6 pr-2 font-bold"
            )}
          >
            Get started
            <span className="rounded-full bg-white">
              <ArrowRight size={30} className="text-blue-500" />
            </span>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Home;
