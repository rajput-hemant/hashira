import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md border text-white  transition-colors focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-fill-light focus:ring-offset-2 focus:ring-offset-fill-dark active:scale-[102%] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white/10",
  {
    variants: {
      variant: {
        default: "bg-white/10 hover:bg-white/25 border-zinc-600",
        destructive:
          "bg-gradient-to-br border-rose-700 from-rose-500 to-rose-600 hover:from-red-500 hover:to-red-600",
        outline:
          "bg-transparent border-zinc-600 hover:bg-white text-slate-100 hover:text-black",
        blue: "bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
        green:
          "bg-gradient-to-br border-green-600 text-black from-green-300 to-green-500 hover:from-green-500 hover:to-green-500",
        ghost:
          "bg-transparent hover:bg-white/10 border-transparent hover:border-zinc-600",
        link: "bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
