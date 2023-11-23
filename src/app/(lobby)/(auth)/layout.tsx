import Link from "next/link";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/icons";
import { GridPattern } from "@/components/magicui/grid-pattern";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid h-[calc(100vh-4rem)] w-full place-items-center">
      <Card shadow="lg" className="space-y-6 py-6 sm:min-w-[480px]">
        <CardHeader className="flex-col justify-center">
          <Logo size={44} className="mb-4" />

          <h1 className="mb-2 border-b text-2xl font-bold text-foreground-600 md:text-4xl">
            Welcome to <span>{siteConfig.name.toLowerCase()}</span>
            <span className="text-primary-500">.</span>
          </h1>

          <p className="text-foreground-500">
            Are you ready for a new experience?
          </p>
        </CardHeader>

        {children}

        <CardFooter className="mx-auto max-w-[16rem]">
          <p className="text-center text-xs text-default-500">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Terms of Service
            </Link>
            {"  "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>

        <GridPattern
          id="__auth_grid_pattern__"
          squares={[
            [4, 4],
            [8, 2],
            [5, 1],
            [13, 3],
            [6, 6],
            [10, 5],
          ]}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-80%] h-[200%] skew-y-[20deg]"
          )}
        />
      </Card>
    </div>
  );
}
