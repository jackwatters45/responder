import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import type { SelectLocation } from "types";
import { db } from "~/server/db";
import { locations } from "~/server/db/schema";
import ConnectGoogle from "../_components/connect-google";
import DashboardForm from "./form";

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

async function getUserBusinesses(
	accountId: string,
): Promise<SelectLocation[] | false> {
	try {
		const businesses = await db
			.select()
			.from(locations)
			.where(eq(locations.accountId, accountId));

		return businesses;
	} catch (e) {
		console.error(e);
		return false;
	}
}

// TODO dumb types - business form -> what needs to use form vs schema types
// TODO test return empty array
// TODO test return false
// TODO make some test data
export default async function Dashboard({
	params: { id },
}: {
	params: { id: string };
}) {
	const session = auth();
	const isOnboarded = session?.sessionClaims?.publicMetaData?.isOnboarded;
	if (isOnboarded) return redirect(`/${id}`);

	const accountId = session?.userId;
	if (!accountId) return redirect("/login");

	const businesses = await getUserBusinesses(accountId);

	if (!businesses) return "handle error";

	if (businesses.length === 0) return <ConnectGoogle />;

	return <DashboardForm businesses={businesses} accountId={accountId} />;
}
