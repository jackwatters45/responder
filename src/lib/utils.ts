import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getIsLastSingle(index: number, arrLength: number) {
	return index === arrLength - 1 && arrLength % 2 !== 0;
}
