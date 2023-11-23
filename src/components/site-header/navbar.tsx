"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Navbar as NavbarUI,
} from "@nextui-org/navbar";
import { SearchLinearIcon } from "@nextui-org/shared-icons";
import { isAppleDevice } from "@react-aria/utils";
import type { User } from "next-auth";

import { useCmdkStore } from "@/stores/cmdk-store";
import { siteConfig } from "@/config/site";
import { Download, Globe } from "../icons";
import { ThemeToggle } from "../theme-toggle";
import { UserDropdown } from "./user-dropdown";

type NavbarProps = {
  user?: User;
};

export function Navbar({ user }: NavbarProps) {
  const [cmdkKey, setCmdkKey] = React.useState<"ctrl" | "command">("ctrl");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cmdkStore = useCmdkStore();

  React.useEffect(() => {
    setCmdkKey(isAppleDevice() ? "command" : "ctrl");
  }, []);

  const handleOpenCmdk = () => {
    cmdkStore.onOpen();
  };

  return (
    <NavbarUI
      maxWidth="full"
      className="justify-end"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* for small devices */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="hidden sm:flex lg:hidden"
      />

      <NavbarContent className="xl:hidden">
        <NavbarBrand
          as={Link}
          href="/"
          className="items-center text-xl font-bold lowercase text-foreground"
        >
          <span>{siteConfig.name}</span>
          <span className="text-primary-500">.</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        {/* for small devices */}
        <NavbarItem className="sm:hidden">
          <Button
            title={`Search (${cmdkKey === "command" ? "⌘" : "Ctrl"}+K)`}
            aria-label={`Search (${cmdkKey === "command" ? "⌘" : "Ctrl"}+K)`}
            isIconOnly
            variant="flat"
            onPress={handleOpenCmdk}
          >
            <SearchLinearIcon
              strokeWidth={2}
              className="pointer-events-none shrink-0 text-base text-default-400"
            />
          </Button>
        </NavbarItem>

        {/* for large devices */}
        <NavbarItem className="hidden sm:flex">
          <Button
            title={`Search (${cmdkKey === "command" ? "⌘" : "Ctrl"}+K)`}
            aria-label={`Search (${cmdkKey === "command" ? "⌘" : "Ctrl"}+K)`}
            variant="flat"
            onPress={handleOpenCmdk}
            className="justify-normal text-sm font-normal text-default-500 sm:w-64"
            startContent={
              <SearchLinearIcon
                strokeWidth={2}
                className="pointer-events-none shrink-0 text-base text-default-400"
              />
            }
            endContent={
              <Kbd
                keys={cmdkKey}
                className="ml-auto hidden px-2 py-0.5 lg:inline-block"
              >
                K
              </Kbd>
            }
          >
            Type to Search...
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            title="Language"
            aria-label="Language"
            isIconOnly
            variant="flat"
          >
            <Globe size={20} />
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            title="Downloads"
            aria-label="Downloads"
            isIconOnly
            variant="flat"
          >
            <Download size={20} />
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <ThemeToggle variant="flat" />
        </NavbarItem>

        <NavbarItem className="ml-1 hidden md:flex">
          <UserDropdown user={user} />
        </NavbarItem>
      </NavbarContent>
    </NavbarUI>
  );
}
