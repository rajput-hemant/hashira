import Link from "next/link";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { Discord, Github, Twitter } from "./icons";

export function Footer() {
  return (
    <footer className="z-40 flex justify-center border-t backdrop-blur-sm">
      <div className="flex max-w-5xl flex-col items-center justify-center gap-2 p-3 text-xs text-foreground-600">
        <div className="w-full max-w-5xl text-center">
          <span className="font-sm font-bold lowercase text-foreground">
            {siteConfig.name}
          </span>
          <span className="font-bold text-yellow-500">. </span>
          <span>
            is not affiliated with or endorsed by any of the anime studios
            behind the creation of the anime presented on this site. This
            website is only a user interface presenting/linking various
            self-hosted files across the internet by other third-party providers
            for easy access.
          </span>
        </div>
        <div>
          Made with ❤️ using{" "}
          <Link
            href="https://qwik.builder.io/"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Next.js
          </Link>
          {" & "}
          <Link
            href="https://github.com/consumet/consumet.ts"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Cosumet.ts
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Button
            isIconOnly
            as="a"
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            className="text-foreground-600 hover:border hover:text-foreground"
          >
            <Github />
          </Button>
          <Button
            isIconOnly
            as="a"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            className="text-foreground-600 hover:border hover:text-foreground"
          >
            <Twitter />
          </Button>
          <Button
            isIconOnly
            as="a"
            href={siteConfig.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            className="text-foreground-600 hover:border hover:text-foreground"
          >
            <Discord />
          </Button>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name} All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
