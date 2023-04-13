import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import NavClient from "./navbar-client";
import Search from "./search-input";
import Settings from "./settings-dropdown";
import SocialNav from "./social-nav";

const Navbar = () => {
  return (
    <NavClient>
      <div className="container flex h-14 items-center sm:justify-between sm:space-x-0 md:h-16">
        {/* left half of navbar */}
        <div className="flex gap-6 md:gap-10">
          {/* logo and title */}

          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block text-xl font-bold lowercase">
              {siteConfig.name}
              <span className="text-yellow-500">.</span>
            </span>
          </Link>

          {/* nav links */}
          <nav className="hidden gap-6 md:flex">
            {siteConfig.mainNav?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center font-semibold text-slate-200 underline-offset-2 hover:text-white hover:underline",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        </div>

        {/* right half of navbar  */}
        <div className="flex flex-1 items-center justify-end md:space-x-1">
          {/* search */}
          <Search />

          {/* social link */}
          <SocialNav />

          {/* user settings */}
          <Settings />
        </div>
      </div>
    </NavClient>
  );
};

export default Navbar;
