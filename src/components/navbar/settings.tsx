"use client";

import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
      <DropdownMenuTrigger className="rounded-md md:rounded-full">
        <Avatar className="hidden border border-zinc-600 md:flex">
          <AvatarImage
            src={session?.user.image ?? ""}
            alt={session?.user.name ?? ""}
          />
          <AvatarFallback>
            {session?.user.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "px-[6px] md:hidden",
          })}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="capitalize">
          {session?.user.name}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Team</span>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Invite users</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent forceMount>
                <DropdownMenuItem>
                  <span>Email</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <span>Message</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <button onClick={() => signOut()} className="flex gap-1">
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Settings;
