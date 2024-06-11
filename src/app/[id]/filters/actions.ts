"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import type { FiltersReturn } from "types";
import { getDefaultFilter } from "~/lib/utils";
import { db } from "~/server/db";
import { filtersTable } from "~/server/db/schema";

export async function getIsFilters() {
	const session = auth().protect();

	const data = await db
		.select({ id: filtersTable.id })
		.from(filtersTable)
		.where(eq(filtersTable.accountId, session.userId));

	return !!data.length;
}

export async function getFilters() {
	const session = auth().protect();

	const data = await db
		.select()
		.from(filtersTable)
		.where(eq(filtersTable.accountId, session.userId));

	if (!data.length) return [getDefaultFilter()];

	return data;
}

export async function saveFilters(formData: FormData) {
	// TODO save filters
}
