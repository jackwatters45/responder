export interface BusinessPreview {
	id: string;
	name: string;
	type: string;
	address: { street: string; city: string; state: string; zip: string };
	rating: number;
	reviewCount: number;
}

export type Plan = "free" | "premium";
