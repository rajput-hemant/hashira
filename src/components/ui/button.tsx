import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md border text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-fill-light focus:ring-offset-2 focus:ring-offset-fill-dark active:scale-[102%] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white/10",
  {
    variants: {
      variant: {
        default: "border-zinc-600 bg-white/10 hover:bg-white/25",
        destructive:
          "border-rose-700 bg-gradient-to-br from-rose-500 to-rose-600 hover:from-red-500 hover:to-red-600",
        outline:
          "border-zinc-600 bg-transparent text-slate-100 hover:bg-white hover:text-black",
        blue: "bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
        green:
          "border-green-600 bg-gradient-to-br from-green-300 to-green-500 text-black hover:from-green-500 hover:to-green-500",
        ghost:
          "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10",
        link: "bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-2",
        lg: "h-11 rounded-md px-8",
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
