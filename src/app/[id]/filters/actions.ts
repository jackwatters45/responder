"use server";

import { nanoid } from "nanoid";

import type { Filter } from "types";

export const getDefaultFilter = (): Filter => ({
	id: nanoid(),
	name: "",
	filter: {
		comparison: "",
		rating: "",
	},
	prompt: "",
	sendEmail: false,
	responseTime: {
		range: {
			start: "30",
			end: "60",
		},
		timeUnit: "minutes",
	},
});

export async function getFilters() {
	// TODO fetch filters
	const res: Filter[] = [];

	if (!res.length) return [getDefaultFilter()];

	return res;
}

export async function saveFilters(formData: FormData) {
	// TODO save filters
}
