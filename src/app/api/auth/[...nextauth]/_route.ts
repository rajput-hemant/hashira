import NextAuth from "next-auth";

import { authOptions } from "@/lib/auth";

// see @/lib/auth.ts
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
