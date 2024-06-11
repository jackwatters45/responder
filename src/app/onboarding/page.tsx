import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { nanoid } from "nanoid";
import { Suspense } from "react";
import { getUserBusinesses } from "~/server/queries/businesses";
import BusinessesForm from "../_components/businesses/businesses-form";

const fakeBusinesses = [
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

// TODO test return empty array
// TODO test return false
// TODO make some test data
export default async function Dashboard({
	params: { id },
}: {
	params: { id: string };
}) {
	const session = auth().protect();

	const isOnboarded = session?.sessionClaims?.publicMetaData?.isOnboarded;
	if (isOnboarded) return redirect(`/${id}`);

	const businesses = await getUserBusinesses();

	if (!businesses) return "handle error";

	// if (businesses.length === 0) return <ConnectGoogle />;

	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Welcome to Responder
						</h1>
						<p className="pt-4 text-muted-foreground">
							Let's get you set up to start managing your reviews.
						</p>
					</div>
					<Suspense fallback={<div>Loading...</div>}>
						<BusinessesForm businesses={businesses} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
