import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface TopographyProps {
  children: React.ReactNode;
  className?: string;
  fontInter?: boolean;
}

export const H1 = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold md:text-4xl lg:text-5xl",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-2xl font-semibold md:text-3xl lg:text-4xl",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-medium md:text-2xl lg:text-3xl",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-light md:text-2xl",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </h4>
  );
};

export const P = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-2",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </p>
  );
};

export const Large = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <div
      className={cn(
        "text-lg font-semibold",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </div>
  );
};

export const Small = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <small
      className={cn(
        "text-sm leading-none md:text-base md:leading-5 lg:leading-6",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </small>
  );
};

export const Subtle = ({
  children,
  className,
  fontInter = false,
}: TopographyProps) => {
  return (
    <p
      className={cn(
        "text-sm text-fill-light",
        className,
        fontInter && inter.className
      )}
    >
      {children}
    </p>
  );
};
