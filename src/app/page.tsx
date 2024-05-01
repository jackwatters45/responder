// import { useRouter } from "next/navigation";
import { Button } from "~/_components/ui/button";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { addUser, getUsers } from "~/server/queries";

export default async function HomePage() {
	// const router = useRouter();
	// onClick={) => router.refresh(()}
	const usersQuery = await getUsers();

	return (
		<div className="p-48">
			<div className="flex gap-4">
				<form
					action={async () => {
						"use server";

						await addUser();
					}}
				>
					<Button type="submit">add user</Button>
				</form>
				<form
					action={async () => {
						"use server";

						await addUser();
					}}
				>
					<Button type="submit" variant={"destructive"}>
						delete
					</Button>
				</form>
			</div>
			<h1>Users</h1>
			<ul>
				{usersQuery.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
