import type { Config } from "drizzle-kit";

import { env } from "~/env";

export default {
	schema: "./src/server/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: env.NODE_ENV === "production" ? env.POSTGRES_URL : env.DATABASE_URL,
	},
	tablesFilter: ["responder_*"],
} satisfies Config;
