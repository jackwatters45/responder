import { RedirectToSignIn } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
	const username = auth().sessionClaims?.username;

	if (username) redirect(`/${username}`);

	return <RedirectToSignIn />;
}
