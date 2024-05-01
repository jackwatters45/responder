import "server-only";
import { revalidatePath } from "next/cache";
import { db } from "./db";
import { users } from "./db/schema";

export async function getUsers() {
	const usersQuery = await db.query.users.findMany();

	return usersQuery;
}

export async function addUser() {
	await db.insert(users).values({
		name: "User",
		email: "jackwattersdev@me.com",
		company: "Company",
	});

	revalidatePath("/");
	// redirect("/");
}
