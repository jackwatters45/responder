import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import type { BusinessPreview } from "types/business-preview";
import ConnectGoogle from "./components/connect-google";
import DashboardForm from "./form";

async function getUserBusinesses(): Promise<BusinessPreview[]> {
	return [
		{
			id: 1,
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
			id: 2,
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
			id: 3,
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

export default async function Dashboard({
	params: { id },
}: {
	params: { id: string };
}) {
	const isOnboarded = auth()?.sessionClaims?.publicMetaData?.isOnboarded;

	if (isOnboarded) return redirect(`/${id}`);

	const businesses = await getUserBusinesses();

	if (businesses.length === 0) return <ConnectGoogle />;

	return <DashboardForm businesses={businesses} />;
}
