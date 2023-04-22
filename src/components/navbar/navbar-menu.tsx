"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem className="mx-0 px-0">
          <NavigationMenuTrigger>Browse</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col items-center justify-center rounded-md bg-white/10 px-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/images/kyojuro-01.png"
                      alt="rengoku"
                      height={200}
                      width={200}
                      className="object-cover"
                    />
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="#" title="Upcoming Anime" />
              <ListItem href="#" title="Popular Anime" />
              <ListItem href="#" title="Recent Releases" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Movie & TV</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-2 lg:w-[500px] ">
              <ListItem href="#" title="Top 10 Movies" />
              <ListItem href="#" title="Top 10 Shows" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Manga
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10",
            className
          )}
          {...props}
        >
          <p className="text-sm font-medium leading-none">{title}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
