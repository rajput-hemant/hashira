import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

import { env } from "./lib/env.mjs";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(env.RATE_LIMITING_REQUESTS_PER_SECOND, "1s"),
});

export default withAuth(
  async function middleware(req) {
    /* -----------------------------------------------------------------------------------------------
     * Rate Limiting
     * -----------------------------------------------------------------------------------------------*/

    if (env.ENABLE_RATE_LIMITING && env.NODE_ENV === "production") {
      const id = req.ip ?? "anonymous";
      const { limit, pending, remaining, reset, success } =
        await ratelimit.limit(id ?? "anonymous");
      if (!success) {
        return NextResponse.json(
          {
            error: {
              message: "Too many requests",
              limit,
              pending,
              remaining,
              reset,
            },
          },
          { status: 429 }
        );
      }
    }

    /* -----------------------------------------------------------------------------------------------
     * Auth
     * -----------------------------------------------------------------------------------------------*/

    const pathname = req.nextUrl.pathname;

    const isAuth = await getToken({ req });

    if (isAuth) {
      if (["/", "/login", "/signup", "/reset-password"].includes(pathname)) {
        return NextResponse.redirect(new URL("/home", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);
