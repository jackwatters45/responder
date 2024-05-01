import { drizzle as drizzleDev } from "drizzle-orm/postgres-js";
import { drizzle as drizzleVercel } from "drizzle-orm/vercel-postgres";

import { sql } from "@vercel/postgres";
import postgres from "postgres";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
	conn: postgres.Sql | undefined;
};

function getDb() {
	if (env.NODE_ENV === "production") return drizzleVercel(sql, { schema });

	const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
	globalForDb.conn = conn;

	return drizzleDev(conn, { schema });
}

export const db = getDb();
