import { pgTableCreator } from "drizzle-orm/pg-core";

import { siteConfig } from "@/config/site";

/**
 * Use the same database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `${siteConfig.name.toLowerCase()}_${name}`
);

/**
 * NOTE: auth tables are common to mutiple projects, remember to remove `table filters` before
 * performing any operations
 */
export * from "./auth";
