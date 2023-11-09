import { cn } from "@/lib/utils";

type ShimmerButtonProps = Partial<{
  shimmerColor: string;
  shimmerSize: string;
  borderRadius: string;
  shimmerDuration: string;
  background: string;
  className: string;
  children: React.ReactNode;
}> &
  React.HTMLAttributes<HTMLButtonElement>;

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "1.5s",
  borderRadius = "100px",
  background = "radial-gradient(ellipse 80% 50% at 50% 120%,rgba(62,61,117),rgba(18,18,38))",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex w-fit cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 [background:var(--bg)] [border-radius:var(--radius)]",
        "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]",
        className
      )}
      {...props}
    >
      {/* spark container */}
      <div className="absolute inset-0 -z-30 overflow-visible [container-type:size]">
        {/* spark */}
        <div className="absolute inset-0 h-[100cqh] animate-slide border-0 [aspect-ratio:1] [mask:none]">
          {/* spark before */}
          <div className="absolute -inset-full w-auto rotate-0 animate-spinLinear [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
      {/* content */}
      {children}

      <div className="absolute bottom-0 left-1/2 h-2/5 w-3/4 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-lg transition-all duration-300 ease-in-out group-hover:h-3/5 group-hover:opacity-100" />

      {/* backdrop */}
    </button>
  );
}
