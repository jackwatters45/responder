import "server-only";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import analyticsServerClient from "./analytics";
import { db } from "./db";
import { users } from "./db/schema";
import { ratelimit } from "./ratelimit";

export async function getUsers() {
	const usersQuery = await db.query.users.findMany();

	return usersQuery;
}

export async function addUser() {
	const user = auth();
	if (!user.userId) throw new Error("User is not authenticated");

	const { success } = await ratelimit.limit(user.userId);
	if (!success) throw new Error("Rate limit exceeded");

	await db.insert(users).values({
		name: "User",
		email: "jackwattersdev@me.com",
		company: "Company",
	});

	analyticsServerClient.capture({
		distinctId: user.userId,
		event: "User Added",
		// properties: {name: "User",} other properties you might want to track
	});

	revalidatePath("/");
	// redirect("/");
}
