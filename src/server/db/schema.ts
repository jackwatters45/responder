// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
	boolean,
	pgEnum,
	pgTableCreator,
	real,
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
	name: text("name").notNull(),
	type: text("type").notNull(),
	street: text("street").notNull(),
	city: text("city").notNull(),
	state: text("state").notNull(),
	zip: text("zip").notNull(),
	rating: real("rating").notNull(),
	reviewCount: real("reviewCount").notNull(),
});
