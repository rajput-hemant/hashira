"use client";

import React from "react";
import { usePathname } from "next/navigation";

type SidebarProps = React.HTMLAttributes<HTMLElement>;

export function SidebarContainer({ children, ...props }: SidebarProps) {
  const pathname = usePathname();

  const excludedPaths = ["/", "/login", "/signup", "/reset-password"];

  if (excludedPaths.includes(pathname)) return null;

  return <aside {...props}>{children}</aside>;
}
