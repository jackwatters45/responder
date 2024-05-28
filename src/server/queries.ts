import "server-only";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "./db";
import { ratelimit } from "./ratelimit";
import type { SelectLocation } from "types";
import { locations } from "./db/schema";

// async function addBusinessAccount() {
// 	const user = auth();
// 	if (!user.userId) throw new Error("User is not authenticated");

// 	const { success } = await ratelimit.limit(user.userId);
// 	if (!success) throw new Error("Rate limit exceeded");

// 	// await db.insert(users).values({
// 	// 	name: "User",
// 	// 	email: "jackwattersdev@me.com",
// 	// 	company: "Company",
// 	// });

// 	// analyticsServerClient.capture({
// 	// 	distinctId: user.userId,
// 	// 	event: "User Added",
// 	// 	// properties: {name: "User",} other properties you might want to track
// 	// });

// 	revalidatePath("/");
// 	// redirect("/");
// }

export type GetUserBusinessesSuccessReturn = SelectLocation[];
export async function getUserBusinesses(): Promise<
	SelectLocation[] | undefined
> {
	const user = auth().protect();

	// 	const { success } = await ratelimit.limit(user.userId);
	// 	if (!success) throw new Error("Rate limit exceeded");

	try {
		const businesses = await db
			.select()
			.from(locations)
			.where(eq(locations.accountId, user.userId));

		return businesses;
	} catch (e) {
		console.error(e);
	}
}
