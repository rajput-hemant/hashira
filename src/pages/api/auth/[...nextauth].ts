import NextAuth from "next-auth/next";

import { authOptions } from "@/lib/auth";

// see @/lib/auth.ts
export default NextAuth(authOptions);
