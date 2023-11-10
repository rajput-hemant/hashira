"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarUi,
} from "@nextui-org/navbar";
import type { User } from "next-auth";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LogOut, Profile, Settings } from "../icons";
import { ThemeToggle } from "../theme-toggle";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "TV Series", href: "/tv-series" },
  { name: "Most Popular", href: "/most-popular" },
  { name: "Top Airing", href: "/top-airing" },
];

type NavbarProps = {
  user?: User;
};

export function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <NavbarUi maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          as={Link}
          href="/"
          className="items-center text-xl font-bold lowercase text-foreground"
        >
          <span>{siteConfig.name}</span>
          <span className="text-primary-500">.</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        {menuItems.map(({ name, href }) => {
          const isActive = pathname.startsWith(href);
          return (
            <NavbarItem key={name} isActive={isActive}>
              <Link
                as={NextLink}
                href={href}
                color="foreground"
                className={cn(
                  "text-sm text-foreground-500",
                  isActive && "text-foreground"
                )}
              >
                {name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeToggle variant="flat" />
        {user ? (
          <Dropdown placement="bottom-end" shadow="lg">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                src={user?.image ?? ""}
                name={user?.name ?? "Anonymous"}
                size="sm"
                color="secondary"
                className="transition-transform"
                fallback={user?.name?.charAt(0) ?? "?"}
              />
            </DropdownTrigger>

            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownSection title="Profile" showDivider>
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-xs font-medium text-default-500 ">
                    {user?.email ?? "Anonymous"}
                  </p>
                </DropdownItem>
              </DropdownSection>

              <DropdownSection>
                <DropdownItem
                  key="account"
                  startContent={<Profile size={16} className={iconClasses} />}
                >
                  My Account
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  startContent={<Settings size={16} className={iconClasses} />}
                >
                  Settings
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => {
                    toast.loading("Logging out...");
                    signOut().then(() => {
                      toast.dismiss();
                      toast.success("Logged out!");
                    });
                  }}
                  startContent={<LogOut size={16} className={iconClasses} />}
                >
                  Log Out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button
            as={Link}
            href={pathname === "/login" ? "/signup" : "/login"}
            color="primary"
            variant="flat"
            className="font-bold"
          >
            {pathname === "/login" ? "Sign Up" : "Login"}
          </Button>
        )}
      </NavbarContent>

      {/* for small devices */}
      <NavbarMenu>
        {menuItems.map(({ name, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <NavbarMenuItem key={name} isActive={isActive}>
              <Link
                as={NextLink}
                href={href}
                color="foreground"
                className={cn(
                  "text-foreground-500",
                  isActive && "text-foreground"
                )}
              >
                {name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </NavbarUi>
  );
}
