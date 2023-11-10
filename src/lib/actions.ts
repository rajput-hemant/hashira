"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { generateFromEmail } from "unique-username-generator";

import { db } from "./db";
import { users } from "./db/schema";

type EmailCredentials = {
  mode: "email";
  email: string;
  password: string;
};

type UsernameCredentials = {
  mode: "username";
  username: string;
  password: string;
};

type Credentials = EmailCredentials | UsernameCredentials;

export async function createNewAccount(credentials: Credentials) {
  if (credentials.mode === "email") {
    const { email, password } = credentials;

    try {
      const hashedPassword = await hash(password, 10);

      // check if email already exists
      // const [user] = await db
      //   .select()
      //   .from(users)
      //   .where(eq(users.email, email))
      //   .limit(1);

      // if (user) {
      //   return { error: "Email already exists" };
      // }

      const username = generateFromEmail(email, 5);
      await db
        .insert(users)
        .values({ username, email, password: hashedPassword });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  redirect("/");
}

export async function resetPassword(credentials: Credentials) {
  try {
    const hashedPassword = await hash(credentials.password, 10);

    const updatedPass = await db
      .update(users)
      .set({ password: hashedPassword })
      .where(
        credentials.mode === "email"
          ? eq(users.email, credentials.email)
          : eq(users.username, credentials.username)
      )
      .returning({ updatedPass: users.password });

    if (updatedPass.length === 0) {
      throw new Error("User not found, please try signing up");
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }

  redirect("/login");
}
