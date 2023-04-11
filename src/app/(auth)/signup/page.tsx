import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import UserAuthForm from "@/components/auth/user-auth-form";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

const Signup = () => {
  return (
    <div className="w-full">
      {/* back button */}
      <Link
        href="/login"
        className={buttonVariants({
          variant: "ghost",
          className:
            "absolute hidden items-center gap-1 md:flex left-2 top-4 md:left-8 md:top-8",
        })}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="mt-1">Back</span>
      </Link>

      {/* logo and title */}
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-10 w-10" />

        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>

        <p className="text-sm text-zinc-400">
          Enter your email to create your account
        </p>
      </div>

      <UserAuthForm />

      {/* login link */}
      <span className="my-4 flex justify-center gap-2 text-white md:my-8">
        Already have an account?
        <Link
          href="/login"
          className="font-semibold text-blue-500 underline-offset-2 brightness-125 hover:underline"
        >
          Login
        </Link>
      </span>

      <p className="text-center text-sm text-zinc-400">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-blue-500"
        >
          Terms of Service{" "}
        </Link>
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-blue-500"
        >
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
};
export default Signup;
