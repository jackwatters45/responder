export interface BusinessPreview {
	id: number;
	name: string;
	type: string;
	address: { street: string; city: string; state: string; zip: string };
	rating: number;
	reviewCount: number;
}
