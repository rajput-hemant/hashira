import React from "react";

import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={navigationMenuTriggerStyle({ className })}
        {...props}
      >
        {children}
      </a>
    </NavigationMenuLink>
  );
});

ListItem.displayName = "ListItem";
