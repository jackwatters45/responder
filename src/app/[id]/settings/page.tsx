import { nanoid } from "nanoid";
import type { BusinessPreview } from "types";
import ConnectGoogle from "~/app/_components/connect-google";
import SettingsForm from "./form";

async function getUserBusinesses(): Promise<BusinessPreview[]> {
	return [
		{
			id: nanoid(),
			name: "Business 1",
			type: "Google My Business",
			address: {
				street: "123 First St",
				city: "Springfield",
				state: "IL",
				zip: "62701",
			},
			rating: 4.5,
			reviewCount: 100,
		},
		{
			id: nanoid(),
			name: "Business 2",
			type: "Google My Business 2",
			address: {
				street: "321 Second St",
				city: "Springfield",
				state: "IL",
				zip: "62701",
			},
			rating: 4.2,
			reviewCount: 55,
		},
		{
			id: nanoid(),
			name: "Business 3",
			type: "Google My Business 3",
			address: {
				street: "231 Third St",
				city: "Springfield",
				state: "IL",
				zip: "62701",
			},
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
					<SettingsForm businesses={businesses} />
				</div>
			</div>
		</div>
	);
}
