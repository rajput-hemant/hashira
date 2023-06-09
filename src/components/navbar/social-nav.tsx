import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "../icons";

type SocialNavProps = {
  className?: string;
};

const SocialNav = ({ className }: SocialNavProps) => {
  return (
    <nav className={cn("flex items-center gap-2 px-1", className)}>
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "px-[6px]",
          })}
        >
          <Icons.github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "px-[6px]",
          })}
        >
          <Icons.twitter className="h-6 w-6 fill-current" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
      <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "px-[6px]",
          })}
        >
          <Icons.discord className="h-6 w-6 fill-current" />
          <span className="sr-only">Discord</span>
        </div>
      </Link>
    </nav>
  );
};

export default SocialNav;
