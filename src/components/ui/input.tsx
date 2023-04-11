import React from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  iconClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconClass, icon: Icon, ...props }, ref) => {
    return (
      <div className="flex w-full items-center">
        {Icon && (
          <Icon
            className={cn("absolute ml-3 h-6 w-6  text-gray-400", iconClass)}
          />
        )}
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-zinc-600 bg-white/10 px-3 text-white transition-all duration-300 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fill-light focus:ring-offset-2 focus:ring-offset-fill-dark disabled:cursor-not-allowed disabled:opacity-50",
            className,
            Icon && "pl-11"
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
