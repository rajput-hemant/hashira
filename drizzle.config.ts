import { type Config } from "drizzle-kit";

import { siteConfig } from "@/config/site";

export default {
  schema: "./src/lib/db/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  out: "./src/lib/db/generated",
  tablesFilter: [`${siteConfig.name}_*`],
} satisfies Config;
