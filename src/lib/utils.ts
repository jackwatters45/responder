import { type ClassValue, clsx } from "clsx";
import { nanoid } from "nanoid";
import { twMerge } from "tailwind-merge";

import type { Filter } from "types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getIsLastSingle(index: number, arrLength: number) {
	return index === arrLength - 1 && arrLength % 2 !== 0;
}

export function titleCase(str: string): string {
	return str
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(" ");
}

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
