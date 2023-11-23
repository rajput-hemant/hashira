"use client";

import Link from "next/link";
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
import type { User } from "next-auth";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

import { LogOut, Profile, Settings } from "../icons";

type UserDropdownProps = {
  user?: User;
};

export function UserDropdown({ user }: UserDropdownProps) {
  const pathname = usePathname();

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <>
      {user ? (
        <Dropdown placement="bottom-end" shadow="lg">
          <DropdownTrigger title="My Account" aria-label="My Account">
            <Avatar
              isBordered
              as="button"
              src={user.image ?? ""}
              name={user.name ?? "Anonymous"}
              size="sm"
              color="secondary"
              className="transition-transform"
              fallback={user.name?.charAt(0) ?? "?"}
            />
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownSection title="Profile" showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs font-medium text-default-500 ">
                  {user.email ?? "Anonymous"}
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
                onPress={() => {
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
    </>
  );
}
