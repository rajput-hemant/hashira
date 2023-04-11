import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import UserAuthForm from "@/components/auth/user-auth-form";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

const Login = () => {
  return (
    <div className="w-full">
      {/* back button */}
      <Link
        href="/"
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

        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>

        <p className="text-sm text-zinc-400">
          Enter your email to sign in to your account
        </p>
      </div>

      <UserAuthForm />

      {/* signup link */}
      <span className="mt-8 flex justify-center gap-2 text-white">
        Don&apos;t have an account?
        <Link
          href="/signup"
          className="font-semibold text-blue-500 underline-offset-2 brightness-125 hover:underline"
        >
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default Login;
