import "server-only";
import { db } from "./db";

export async function getUsers() {
	const usersQuery = await db.query.users.findMany();

	return usersQuery;
}
