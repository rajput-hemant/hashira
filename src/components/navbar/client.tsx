"use client";

import { usePathname } from "next/navigation";

const NavClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const excludedPaths = ["/login", "/signup"];

  return <> {!excludedPaths.includes(pathname!) && children}</>;
};

export default NavClient;
