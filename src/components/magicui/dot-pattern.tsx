import { cn } from "@nextui-org/system";

export type DotPatternProps = {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
} & React.SVGProps<SVGSVGElement>;

export function DotPattern({
  height = 16,
  width = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-zinc-700 dark:fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id=":ri:"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr}></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#:ri:)"></rect>
    </svg>
  );
}
