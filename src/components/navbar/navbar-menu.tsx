"use client";

import React from "react";
import Link from "next/link";
import { Construction, Home } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem className="mx-0 px-0">
          <NavigationMenuTrigger>Browse</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-56 gap-3 p-6 lg:w-80 lg:grid-cols-[.75fr_1fr]">
              <LinkItem
                href="/anime"
                className="row-span-3 overflow-hidden p-0 lg:row-span-4"
              >
                <div className="flex w-full select-none items-center justify-center gap-2 rounded-md bg-gradient-to-b from-indigo-500 to-rose-500 p-6 font-bold transition-transform duration-300 hover:scale-110 md:h-full lg:flex-col">
                  <Home />

                  <span className="mt-2 text-lg">Home</span>
                </div>
              </LinkItem>

              <LinkItem href="/anime/trending" title="Trending Anime" />
              <LinkItem href="/anime/upcoming" title="Upcoming Anime" />
              <LinkItem href="/anime/popular" title="Popular Anime" />
              <LinkItem href="/anime/recent-releases" title="Recent Releases" />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Movie & TV</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-56 place-items-center gap-2 p-4 font-bold">
              <Construction className="text-yellow-500" />
              Under Development
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Books</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-56 place-items-center gap-2 p-4 font-bold">
              <Construction className="text-yellow-500" />
              Under Development
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

type LinkItemProps = {
  href: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

const LinkItem = ({ href, title, className, children }: LinkItemProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "w-full space-y-1 rounded-md p-3 text-center hover:bg-white/10",
          className
        )}
      >
        {children ?? (
          <p className="text-sm font-medium leading-none">{title}</p>
        )}
      </Link>
    </NavigationMenuLink>
  );
};

export default NavMenu;
