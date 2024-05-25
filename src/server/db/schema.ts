// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
	boolean,
	pgEnum,
	pgTableCreator,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `responder_${name}`);

export const accounts = createTable("google-mybusiness-account", {
	id: text("id").primaryKey(),
	userId: text("userId").notNull(),
	// add relevant account info
	//

	createdAt: timestamp("createdAt").defaultNow().notNull(),
	updatedAt: timestamp("updatedAt").defaultNow().notNull(), // TODO how do
});

export const locations = createTable("google-mybusiness-location", {
	id: text("id").primaryKey(),
	accountId: text("accountId")
		.notNull()
		.references(() => accounts.id, {
			onDelete: "cascade",
			onUpdate: "no action",
		}),
	active: boolean("active").default(false).notNull(),
});

export const planEnum = pgEnum("plan", ["free", "premium"]);

export const users = createTable("user", {
	id: text("id").primaryKey(),
	userId: text("userId").notNull(),
	plan: planEnum("plan").default("free").notNull(),

	// ie - prompt
	// ie - filter (negative, positive) (actual cutoff)
	// delay range
});
