import type { z } from "zod";
import type { filter } from "~/app/[id]/filters/form";

export interface BusinessPreview {
	id: string;
	name: string;
	type: string;
	address: { street: string; city: string; state: string; zip: string };
	rating: number;
	reviewCount: number;
}

export type Plan = "free" | "premium";

export type Filter = z.infer<typeof filter>;
