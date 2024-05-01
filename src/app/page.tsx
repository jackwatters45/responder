// import { useRouter } from "next/navigation";
import { Button } from "~/_components/ui/button";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { getUsers } from "~/server/queries";

export default async function HomePage() {
	// const router = useRouter();
	// onClick={) => router.refresh(()}
	const usersQuery = await getUsers();

	async function addUser() {
		"use server";

		await db.insert(users).values({
			name: "User",
			email: "jackwattersdev@me.com",
			company: "Company",
		});
	}

	return (
		<div className="p-48">
			<Button type="button" onClick={addUser}>
				something that needs to be refreshed
			</Button>
			<h1>Users</h1>
			<ul>
				{usersQuery.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
