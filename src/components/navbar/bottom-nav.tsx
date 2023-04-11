import Link from "next/link";
import { Book, Clapperboard, Home, User } from "lucide-react";

import NavClient from "./client";

const BottomNav = () => {
  return (
    <NavClient>
      <footer className="fixed bottom-0 z-40 w-full border-t border-white/10 backdrop-blur md:hidden">
        <div className="flex h-14 items-center justify-around">
          <Link href="/">
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
