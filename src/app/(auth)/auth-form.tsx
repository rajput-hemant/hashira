"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Tooltip } from "@nextui-org/tooltip";
import { signIn } from "next-auth/react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { createNewAccount, resetPassword } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { authSchema } from "@/lib/validations";
import {
  AtSign,
  Eye,
  EyeSlash,
  Github,
  Google,
  Mail,
  Password,
} from "@/components/icons";

type AuthFormProps = {
  mode: "login" | "signup" | "reset";
  className?: string;
};

const loginSchema = authSchema.innerType().omit({ confirmPassword: true });
type FormData = z.infer<typeof authSchema>;

export function AuthForm({ mode, className, ...props }: AuthFormProps) {
  const [isEmailMode, setIsEmailMode] = React.useState(true);
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = React.useState(false);
  const [oauthLoading, setOauthLoading] = React.useState<"google" | "github">();

  const togglePassVisibility = () => setIsPassVisible(!isPassVisible);
  const toggleMode = () => setIsEmailMode(!isEmailMode);
  const toggleConfirmPassVisibility = () =>
    setIsConfirmPassVisible(!isConfirmPassVisible);

  const resolver = zodResolver(mode === "login" ? loginSchema : authSchema);
  const form = useForm<FormData>({ resolver });
  const errors = form.formState.errors;

  const processForm: SubmitHandler<FormData> = async ({
    username,
    email,
    password,
  }) => {
    console.log(email, password);

    try {
      if (mode === "login") {
        toast.loading("Signing in...");
        await signIn("credentials", { username, email, password }).then(() =>
          toast.dismiss()
        );
      } else if (mode === "signup") {
        await createNewAccount({ mode: "email", email, password });
      } else {
        if (isEmailMode) {
          await resetPassword({ mode: "email", email, password });
        } else {
          await resetPassword({ mode: "username", username, password });
        }
      }
    } catch (error) {
      const err = error as Error;
      console.error(err.message);

      // let description = err.message || "Please try again later.";

      // if (err.message.includes("user_email_unique")) {
      //   description = "An account with this email already exists.";
      // }

      // toast({
      //   variant: "destructive",
      //   title: "Uh oh!, Something went wrong",
      //   description,
      //   action: <ToastAction altText="Close">Close</ToastAction>,
      // });
    }
  };

  async function googleSignInHandler() {
    setOauthLoading("google");

    try {
      toast.loading("Signing in...");
      await signIn("google");
      toast.dismiss();
    } catch (error) {
      // ...
    }

    setOauthLoading(undefined);
  }

  async function githubSignInHandler() {
    setOauthLoading("github");

    try {
      toast.loading("Signing in...");
      await signIn("github");
      toast.dismiss();
    } catch (error) {
      // ...
    }

    setOauthLoading(undefined);
  }

  return (
    <CardBody
      as="form"
      className={cn("z-10 space-y-2 px-6 py-1", className)}
      onSubmit={form.handleSubmit(processForm)}
      {...props}
    >
      <label htmlFor={isEmailMode ? "email" : "username"} className="sr-only">
        {isEmailMode ? "Email" : "Username"}
      </label>
      <Input
        type={isEmailMode ? "email" : "text"}
        label={isEmailMode ? "Email" : "Username"}
        isRequired
        placeholder={isEmailMode ? "you@example.com" : "Enter your username"}
        className="relative"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        startContent={
          isEmailMode ? (
            <Mail className="pointer-events-none text-default-400" />
          ) : (
            <AtSign
              size={20}
              className="pointer-events-none text-default-400"
            />
          )
        }
        endContent={
          mode === "login" && (
            <Tooltip
              showArrow
              content={`Use ${isEmailMode ? "Username" : "Email"} Instead!`}
            >
              <button
                type="button"
                onClick={toggleMode}
                className="focus:outline-none"
              >
                {isEmailMode ? (
                  <AtSign
                    size={22}
                    className="pointer-events-none text-default-400"
                  />
                ) : (
                  <Mail
                    size={22}
                    className="pointer-events-none text-default-400"
                  />
                )}
              </button>
            </Tooltip>
          )
        }
        {...form.register(isEmailMode ? "email" : "username")}
      />

      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <Input
        label="Password"
        placeholder="••••••••••"
        isRequired
        type={isPassVisible ? "text" : "password"}
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
        startContent={
          <Password className="pointer-events-none text-default-400" />
        }
        endContent={
          <Tooltip content={isPassVisible ? "Hide Password" : "Show Password"}>
            <button
              className="focus:outline-none"
              type="button"
              onClick={togglePassVisibility}
            >
              {isPassVisible ? (
                <EyeSlash className="pointer-events-none text-2xl text-default-400" />
              ) : (
                <Eye className="pointer-events-none text-2xl text-default-400" />
              )}
            </button>
          </Tooltip>
        }
        {...form.register("password")}
      />

      {mode === "signup" && (
        <>
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <Input
            label="Confirm Password"
            placeholder="••••••••••"
            isRequired
            type={isPassVisible ? "text" : "password"}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
            startContent={
              <Password className="pointer-events-none text-default-400" />
            }
            endContent={
              <Tooltip
                content={isPassVisible ? "Hide Password" : "Show Password"}
              >
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleConfirmPassVisibility}
                >
                  {isPassVisible ? (
                    <EyeSlash className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <Eye className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              </Tooltip>
            }
            {...form.register("confirmPassword")}
          />
        </>
      )}

      {mode === "login" && (
        <Link
          href="reset-password"
          className="mx-auto text-center text-sm text-foreground-500 underline-offset-4 hover:text-foreground-600 hover:underline"
        >
          Forgot password?
        </Link>
      )}

      <Button
        fullWidth
        variant="flat"
        color="success"
        isLoading={form.formState.isSubmitting}
        className="text-base font-bold"
        type="submit"
      >
        {mode === "login" && "Login"}
        {mode === "signup" && "Sign Up"}
        {mode === "reset" && "Reset Password"}
      </Button>

      <p className="mx-auto py-2 text-sm text-foreground-500">
        {mode === "login" && (
          <>
            Don&apos;t have an account?{" "}
            <Link
              href="signup"
              className="underline-offset-4 hover:text-foreground-600 hover:underline"
            >
              Sign Up
            </Link>
          </>
        )}

        {mode === "signup" && (
          <>
            Already have an account?{" "}
            <Link
              href="login"
              className="underline-offset-4 hover:text-foreground-600 hover:underline"
            >
              Login
            </Link>
          </>
        )}

        {mode === "reset" && (
          <>
            Remembered your password?{" "}
            <Link
              href="login"
              className="underline-offset-4 hover:text-foreground-600 hover:underline"
            >
              Login
            </Link>
          </>
        )}
      </p>

      <div className="relative py-2">
        <span className="absolute inset-x-0 inset-y-1/2 border-t" />

        <span className="relative mx-auto flex w-fit bg-content1 px-2 text-xs uppercase text-foreground-500 transition-colors duration-0">
          Or continue with
        </span>
      </div>

      <div className="flex w-full space-x-2">
        <Button
          fullWidth
          variant="flat"
          isLoading={oauthLoading === "google"}
          startContent={
            oauthLoading !== "google" && <Google className="h-5 w-5" />
          }
          onClick={googleSignInHandler}
          className="border"
        >
          <span className="mt-1 hidden sm:block">
            {mode !== "login" ? "Sign Up with Google" : "Google"}
          </span>
          <span className="mt-1 sm:hidden">Google</span>
        </Button>
        <Button
          fullWidth
          isLoading={oauthLoading === "github"}
          variant="flat"
          startContent={
            oauthLoading !== "github" && <Github className="h-5 w-5" />
          }
          onClick={githubSignInHandler}
          className="border"
        >
          <span className="mt-1 hidden sm:block">
            {mode !== "login" ? "Sign Up with Github" : "Github"}
          </span>
          <span className="mt-1 sm:hidden">Github</span>
        </Button>
      </div>
    </CardBody>
  );
}
