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

// TODO: index
export const users = createTable("user", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }),
	email: varchar("email", { length: 256 }),

	// TODO expand on this
	company: varchar("company", { length: 256 }),

	createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updatedAt"),
});

export const config = createTable("config", {
	id: serial("id").primaryKey(),
	key: varchar("key", { length: 256 }),
	value: varchar("value", { length: 256 }),
});
