import {
	boolean,
	integer,
	json,
	pgEnum,
	pgTableCreator,
	real,
	serial,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `responder_${name}`);

export const planEnum = pgEnum("plan", ["free", "premium"]);

export const accountsTable = createTable("google-mybusiness-account", {
	id: text("id").primaryKey(),

	plan: planEnum("plan").notNull(),

	createdAt: timestamp("createdAt").defaultNow().notNull(),
	updatedAt: timestamp("updatedAt").defaultNow().notNull(), // TODO how do
});

// TODO probably just use api to get location info
export const locationsTable = createTable("google-mybusiness-location", {
	id: serial("id").primaryKey(),
	accountId: text("accountId")
		.notNull()
		.references(() => accountsTable.id, {
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

export const statusEnum = pgEnum("status", ["success", "failed"]);

export const responsesTable = createTable("response", {
	id: serial("id").primaryKey(),
	reply: text("reply").notNull(),
	locationId: integer("locationId")
		.notNull()
		.references(() => locationsTable.id, {
			onDelete: "cascade",
			onUpdate: "no action",
		}),
	accountId: text("accountId")
		.notNull()
		.references(() => accountsTable.id, {
			onDelete: "cascade",
			onUpdate: "no action",
		}),
	filter: integer("filter")
		.notNull()
		.references(() => filtersTable.id, {
			onDelete: "cascade",
			onUpdate: "no action",
		}),
	// TODO maybe create review table but probably just
	reviewId: text("reviewId").notNull(),
	receivedAt: timestamp("receivedAt").notNull(),
	sendAt: timestamp("sendAt").notNull(),
	delay: integer("delay").notNull(),
	status: statusEnum("status").notNull(),
	metadata: json("metadata").$type<{ tokens: number }>(),
});

export const filtersTable = createTable("filter", {
	id: serial("id").primaryKey(),
	accountId: text("accountId")
		.notNull()
		.references(() => accountsTable.id, {
			onDelete: "cascade",
			onUpdate: "no action",
		}),

	name: text("name").notNull(),

	comparison: text("comparison").notNull(),
	rating: text("rating").notNull(),

	prompt: text("prompt").notNull(),
	sendEmail: boolean("sendEmail").default(false).notNull(),

	responseStart: text("responseStart").notNull(),
	responseEnd: text("responseEnd"),
	responseTimeUnit: text("responseTimeUnit").notNull(),
});
