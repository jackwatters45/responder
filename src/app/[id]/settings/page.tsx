import { nanoid } from "nanoid";

import type { SelectLocation } from "types";

import BusinessesForm from "~/app/_components/businesses/businesses-form";
import ConnectGoogle from "~/app/_components/connect-google";

// TODO
async function getUserBusinesses(): Promise<Partial<SelectLocation>[]> {
	return [
		{
			id: nanoid(),
			name: "Business 1",
			type: "Google My Business",
			street: "123 First St",
			city: "Springfield",
			state: "IL",
			zip: "62701",
			rating: 4.5,
			reviewCount: 100,
		},
		{
			id: nanoid(),
			name: "Business 2",
			type: "Google My Business 2",
			street: "321 Second St",
			city: "Springfield",
			state: "IL",
			zip: "62701",
			rating: 4.2,
			reviewCount: 55,
		},
		{
			id: nanoid(),
			name: "Business 3",
			type: "Google My Business 3",
			street: "231 Third St",
			city: "Springfield",
			state: "IL",
			zip: "62701",
			rating: 3.8,
			reviewCount: 62,
		},
	];
}

export default async function Settings() {
	const businesses = await getUserBusinesses();

	if (businesses.length === 0) return <ConnectGoogle />;

	// TODO change text
	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Settings
						</h1>
						<p className="pt-4 text-muted-foreground">Manage your account settings</p>
					</div>
					<div className="space-y-8 p-6 border rounded-lg shadow-md">
						<div>
							<legend className="text-2xl font-bold tracking-tight ">
								Choose Business to Manage
							</legend>
							<p className="pt-4 text-muted-foreground">
								One business is included with the free plan. Upgrade later to manage
								multiple businesses.
							</p>
						</div>
						<BusinessesForm businesses={businesses} />
					</div>
				</div>
			</div>
		</div>
	);
}
