import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};
