import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
	const user = await currentUser();

	if (user?.username) redirect(`/${user.username}`);

	return (
		<SignedOut>
			<RedirectToSignIn />
		</SignedOut>
	);
}
