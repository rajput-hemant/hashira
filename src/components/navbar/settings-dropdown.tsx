"use client";

import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { LogOut, Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
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
} from "@/components/ui/dropdown-menu";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const logout = async () => {
    await signOut();

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

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

        <DropdownMenuItem className="">
          <button onClick={logout} className="flex w-full justify-between">
            Log out
            <LogOut className="h-4 w-4" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Settings;
