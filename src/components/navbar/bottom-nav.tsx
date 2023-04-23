import Link from "next/link";
import { Book, Clapperboard, Home, User } from "lucide-react";

import NavClient from "./navbar-client";

const BottomNav = () => {
  return (
    <NavClient isBottomNav>
      <footer className="fixed bottom-0 z-40 w-full border-t border-zinc-600 bg-fill-box/50 backdrop-blur hover:bg-fill-box/75 md:hidden">
        <div className="flex h-14 items-center justify-around">
          <Link href="/anime">
            <Home />
          </Link>

          <Link href="/">
            <Clapperboard />
          </Link>

          <Link href="/">
            <Book />
          </Link>

          <Link href="/">
            <User />
          </Link>
        </div>
      </footer>
    </NavClient>
  );
};

export default BottomNav;
