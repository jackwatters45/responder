// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { pgTableCreator, serial, text, timestamp } from "drizzle-orm/pg-core";

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
});

export const configs = createTable("config", {
	id: serial("id").primaryKey(),
	userId: text("userId").notNull(),

	// ie - prompt
	// ie - filter (negative, positive) (actual cutoff)
	// delay range
});
