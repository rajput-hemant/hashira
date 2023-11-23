"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { ChevronRightIcon } from "@nextui-org/shared-icons";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Anime, Logo, Movie, Search, Television } from "../icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { linkComponents } from "./link-components";
import { ListItem } from "./list-item";
import { SidebarContainer } from "./sidebar-container";

type SidebarProps = React.HTMLAttributes<HTMLElement>;

export function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname();

  const navListRef = React.useRef<HTMLUListElement>(null);

  // Add `w-full` class to the parent element of the navigation menu list
  React.useLayoutEffect(() => {
    navListRef.current?.parentElement?.classList.add("w-full");
  }, []);

  return (
    <SidebarContainer
      className={cn(
        "relative rounded-medium border-r bg-content1/50",
        className
      )}
      {...props}
    >
      <Button
        isIconOnly
        size="sm"
        variant="flat"
        radius="full"
        className="absolute -right-4 top-4 z-50 bg-primary-500"
      >
        <ChevronRightIcon
          className={cn("h-6 w-6 text-white", true && "rotate-180")}
        />
      </Button>

      <Link
        href="/"
        className="flex items-center px-6 py-4 text-3xl font-bold lowercase text-foreground"
      >
        <Logo className="mb-1 mr-2" />
        <span>{siteConfig.name}</span>
        <span className="text-primary-500">.</span>
      </Link>

      <NavigationMenu orientation="vertical">
        <NavigationMenuList ref={navListRef} className="w-full gap-2 px-6">
          {linkComponents.slice(0, 3).map(({ title, href, icon: Icon }, i) => {
            return (
              <NavigationMenuItem key={i} className="w-full">
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === href}
                    className={navigationMenuTriggerStyle({
                      className: "text-lg w-full justify-normal py-7",
                    })}
                  >
                    <Icon className="mr-2" />
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}

          <NavigationMenuItem className="w-full">
            <NavigationMenuTrigger className="w-full justify-normal py-7 text-lg">
              <Search className="mr-2" />
              Search
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Card className="min-w-max p-3">
                {linkComponents
                  .slice(7, 11)
                  .map(({ title, href, icon: Icon }) => (
                    <ListItem
                      key={title}
                      href={href}
                      className="flex w-full items-center justify-normal py-6"
                    >
                      <Icon size={20} className="mr-2" />
                      {title}
                    </ListItem>
                  ))}
              </Card>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <NavigationMenuTrigger className="w-full justify-normal py-7 text-lg">
              <Anime className="mr-2" />
              Anime
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Card className="flex flex-row gap-2 p-3">
                <Card
                  as="a"
                  role="link"
                  href="/discover/anime"
                  isPressable
                  className="relative aspect-[16/9] w-56"
                >
                  <Image
                    src="https://image.tmdb.org/t/p/w342_filter(duotone,070235,dd4749)/iAld03IP69UEpqQbVWoRBvjqkqX.jpg"
                    alt="Discover Anime"
                    isZoomed
                    loading="lazy"
                  />

                  <h3 className="absolute inset-x-0 bottom-0 z-10 py-3 text-center text-2xl font-semibold backdrop-blur light:bg-default/50">
                    Anime
                  </h3>
                </Card>
                <div className="flex flex-col">
                  {linkComponents
                    .slice(11, 15)
                    .map(({ title, href, icon: Icon, description }) => (
                      <ListItem
                        key={title}
                        href={href}
                        className="flex h-20 w-64 flex-col items-start gap-2 py-6"
                      >
                        <div className="flex items-center justify-center">
                          <Icon size={20} className="mr-2" />
                          {title}
                        </div>
                        <p className="text-start text-xs font-normal text-default-500">
                          {description}
                        </p>
                      </ListItem>
                    ))}
                </div>
              </Card>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <NavigationMenuTrigger className="w-full justify-normal py-7 text-lg">
              <Movie className="mr-2" />
              Movies
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Card className="flex flex-row gap-2 p-3">
                <Card
                  as="a"
                  role="link"
                  href="/discover/movies"
                  isPressable
                  className="relative aspect-[16/9] w-56"
                >
                  <Image
                    src="https://image.tmdb.org/t/p/w342_filter(duotone,190235,ad47dd)/wNB551TsEb7KFU3an5LwOrgvUpn.jpg"
                    alt="Discover Movies"
                    isZoomed
                    loading="lazy"
                  />

                  <h3 className="absolute inset-x-0 bottom-0 z-10 py-3 text-center text-2xl font-semibold backdrop-blur light:bg-default/50">
                    Movies
                  </h3>
                </Card>
                <div className="flex flex-col">
                  {linkComponents
                    .slice(15, 19)
                    .map(({ title, href, icon: Icon, description }) => (
                      <ListItem
                        key={title}
                        href={href}
                        className="flex h-20 w-64 flex-col items-start gap-2 py-6"
                      >
                        <div className="flex items-center justify-center">
                          <Icon size={20} className="mr-2" />
                          {title}
                        </div>
                        <p className="text-start text-xs font-normal text-default-500">
                          {description}
                        </p>
                      </ListItem>
                    ))}
                </div>
              </Card>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <NavigationMenuTrigger className="w-full justify-normal py-7 text-lg">
              <Television className="mr-2" />
              TV Shows
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Card className="flex flex-row gap-2 p-3">
                <Card
                  as="a"
                  role="link"
                  href="/discover/tv-shows"
                  isPressable
                  className="relative aspect-[16/9] w-56"
                >
                  <Image
                    src="https://image.tmdb.org/t/p/w342_filter(duotone,352302,ddd147)/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
                    alt="Discover TV Shows"
                    isZoomed
                    loading="lazy"
                  />

                  <h3 className="absolute inset-x-0 bottom-0 z-10 py-3 text-center text-2xl font-semibold backdrop-blur light:bg-default/50">
                    TV Shows
                  </h3>
                </Card>
                <div className="flex flex-col">
                  {linkComponents
                    .slice(19, 24)
                    .map(({ title, href, icon: Icon, description }) => (
                      <ListItem
                        key={title}
                        href={href}
                        className="flex h-20 w-64 flex-col items-start gap-2 py-6"
                      >
                        <div className="flex items-center justify-center">
                          <Icon size={20} className="mr-2" />
                          {title}
                        </div>
                        <p className="text-start text-xs font-normal text-default-500">
                          {description}
                        </p>
                      </ListItem>
                    ))}
                </div>
              </Card>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {linkComponents.slice(3, 7).map(({ title, href, icon: Icon }, i) => {
            return (
              <NavigationMenuItem key={i} className="w-full">
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === href}
                    className={navigationMenuTriggerStyle({
                      className: "text-lg w-full justify-normal py-7",
                    })}
                  >
                    <Icon className="mr-2" />
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </SidebarContainer>
  );
}
