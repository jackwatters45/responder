// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
	pgTableCreator,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `responder_${name}`);

export const accounts = createTable("google-mybusiness-account", {
	id: serial("id").primaryKey(),
	userId: varchar("userId", { length: 256 }).notNull(),

	// add relevant account info
	//

	createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updatedAt"),
});

export const locations = createTable("google-mybusiness-location", {
	id: serial("id").primaryKey(),
	userId: varchar("userId", { length: 256 }).notNull(),

	// add relevant google business info
	//

	createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updatedAt"),
});

export const configs = createTable("config", {
	id: serial("id").primaryKey(),
	userId: varchar("userId", { length: 256 }).notNull(),

	// ie - prompt
	// ie - filter (negative, positive) (actual cutoff)
	// delay range

	createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updatedAt"),
});
