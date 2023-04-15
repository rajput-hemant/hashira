import { cn } from "@/lib/utils";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "h-full w-full animate-pulse rounded-md bg-white/10",
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
