"use server";

import "server-only";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { revalidatePath } from "next/cache";
import type { LocationReturn } from "types";
import { db } from "../db/index";
import { accountsTable, locationsTable } from "../db/schema";

export async function addBusinessAccount() {
	const user = auth().protect();

	await db.insert(accountsTable).values({
		id: user.userId,
		plan: "free",
	});

	revalidatePath("/");
}

// export type GetUserBusinessesSuccessReturn = LocationReturn[];
export async function getIsBusinesses(): Promise<boolean> {
	const user = auth().protect();

	const data = await db
		.select({ id: locationsTable.id })
		.from(locationsTable)
		.where(eq(locationsTable.accountId, user.userId));

	return !!data.length && !!user.sessionClaims.publicMetaData?.isOnboarded;
}

export async function getUserBusinesses(): Promise<
	LocationReturn[] | undefined
> {
	const user = auth().protect();

	// 	const { success } = await ratelimit.limit(user.userId);
	// 	if (!success) throw new Error("Rate limit exceeded");

	try {
		const businesses = await db
			.select()
			.from(locationsTable)
			.where(eq(locationsTable.accountId, user.userId));

		return businesses;
	} catch (e) {
		console.error(e);
	}
}
