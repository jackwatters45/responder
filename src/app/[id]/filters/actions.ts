"use server";

import type { Filter } from "types";
import { getDefaultFilter } from "~/lib/utils";

export async function getFilters() {
	// TODO fetch filters
	const res: Filter[] = [];

	if (!res.length) return [getDefaultFilter()];

	return res;
}

export async function saveFilters(formData: FormData) {
	// TODO save filters
}
