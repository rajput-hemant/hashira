"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, Mail, User } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validation";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { ToastAction } from "../ui/toast";

type FormData = z.infer<typeof userAuthSchema>;

const UserAuthForm = () => {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const submitHandler = async (data: FormData) => {
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      callbackUrl: "/",
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  };

  const googleSignInHandler = () => {
    setIsGoogleLoading(true);
    signIn("google", { callbackUrl: "/" });
  };

  const guestSignInHandler = () => {
    toast({
      title: "Guest sign in",
      description:
        "This feature is not available yet. You can sign in with Google for now.",
      variant: "destructive",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
    });
  };

  return (
    <>
      <form className="mt-5 w-full" onSubmit={handleSubmit(submitHandler)}>
        {/* email input */}
        <Input
          id="email"
          type="email"
          placeholder="Email address"
          icon={Mail}
          className={cn(
            "h-12 md:h-14 md:text-lg",
            errors.email &&
              "ring-2 ring-red-500 ring-offset-2 ring-offset-fill-dark focus:ring-red-500"
          )}
          {...register("email")}
          disabled={isLoading || isGoogleLoading}
        />

        {/* email error */}
        {errors?.email && (
          <p className="pt-2 text-center text-sm text-red-500 transition-transform duration-300">
            {errors.email.message}
          </p>
        )}

        {/* login button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="group/button mt-5 h-12 w-full bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 md:h-14"
        >
          <div className="flex gap-1 text-2xl font-extrabold text-fill-dark ">
            {isLoading && <Loader2 className="mt-1 h-5  animate-spin" />}

            {pathname == "/login" ? "Login" : "Signup"}

            <ArrowRight className="mt-1 h-5  duration-300 group-hover/button:translate-x-1" />
          </div>
        </Button>
      </form>

      {/* divider */}
      <div className="my-5 flex w-full items-center">
        <Separator />
        <span className="px-2 text-sm text-zinc-400">OR CONTINUE WITH</span>
        <Separator />
      </div>

      {/* buttons wrapper */}
      <div className="flex w-full flex-col gap-3 md:flex-row">
        {/* google signin button */}
        <Button
          type="button"
          onClick={googleSignInHandler}
          disabled={isLoading || isGoogleLoading}
          className="group/button h-12 w-full border border-zinc-600 hover:border-red-600 hover:bg-red-500 md:h-14"
        >
          <p className="flex gap-x-2 font-bold text-inherit">
            {isGoogleLoading ? (
              <Loader2 className="h-5 animate-spin" />
            ) : (
              <Icons.googleColored className="h-5 group-hover/button:stroke-black " />
            )}
            Sign in with Google
          </p>
        </Button>

        {/* guest signin button */}
        <Button
          type="submit"
          // disabled
          onClick={guestSignInHandler}
          className="h-12 w-full border border-zinc-600 hover:border-blue-600 hover:bg-blue-500 md:h-14"
        >
          <p className="flex gap-x-2 font-bold text-inherit">
            <User className="h-5" />
            Sign in as Guest
          </p>
        </Button>
      </div>
    </>
  );
};

export default UserAuthForm;
