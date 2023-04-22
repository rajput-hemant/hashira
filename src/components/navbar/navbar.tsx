import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import NavClient from "./navbar-client";
import NavMenu from "./navbar-menu";
import Search from "./search";
import Settings from "./settings-dropdown";

const Navbar = () => {
  return (
    <NavClient>
      <div className="container flex h-14 items-center sm:justify-between sm:space-x-0 md:h-16">
        {/* left half of navbar */}
        <div className="flex lg:gap-4">
          {/* logo and title */}

          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block text-xl font-bold lowercase">
              {siteConfig.name}
              <span className="text-yellow-500">.</span>
            </span>
          </Link>

          <NavMenu />
        </div>

        {/* right half of navbar  */}
        <div className="flex flex-1 items-center justify-end md:space-x-4">
          {/* search */}
          <Search />

          {/* user settings */}
          <Settings />
        </div>
      </div>
    </NavClient>
  );
};

export default Navbar;
