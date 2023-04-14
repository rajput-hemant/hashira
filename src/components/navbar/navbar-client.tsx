"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface NavClientProps {
  isBottomNav?: boolean;
  children: React.ReactNode;
}

const NavClient = ({ isBottomNav, children }: NavClientProps) => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLHeadElement>(null);

  const excludedPaths = ["/login", "/signup"];

  useEffect(() => {
    let lastScrollY = 0;

    /**
     * Hide the header when scrolling down and show it when scrolling up
     */
    const handleScroll = () => {
      if (headerRef.current) {
        const currentScrollY = window.scrollY;
        const headerHeight = headerRef.current.offsetHeight;

        if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
          headerRef.current.classList.add("-translate-y-full");
        } else {
          headerRef.current.classList.remove("-translate-y-full");
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!excludedPaths.includes(pathname!) &&
        (isBottomNav ? (
          children
        ) : (
          <header
            ref={headerRef}
            className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur transition-transform duration-300"
          >
            {children}
          </header>
        ))}
    </>
  );
};

export default NavClient;
