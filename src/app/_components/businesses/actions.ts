"use server";

import { auth } from "@clerk/nextjs/server";
import debug from "debug";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { locationsTable } from "~/server/db/schema";

const log = debug("responder:settings:businesses:actions");

export async function editActiveBusinesses(
	businessId: string,
	formData: FormData,
) {
	auth().protect();

	try {
		const isSelected = formData.get(businessId) === "on";

		const business = await db
			.update(locationsTable)
			.set({
				active: isSelected,
			})
			.where(eq(locationsTable.id, businessId))
			.returning();

		return business;
	} catch (e) {
		console.error(e);
		return false;
	}
}
