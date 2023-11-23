import type { NavbarProps } from "@nextui-org/navbar";
import { Navbar } from "@nextui-org/navbar";
import { cn } from "@nextui-org/system";

export function BottomNavigation({ className, ...props }: NavbarProps) {
  return (
    <Navbar
      position="static"
      className={cn("fixed inset-x-0 bottom-0", className)}
      {...props}
    >
      hello
    </Navbar>
  );
}
