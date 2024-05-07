import { SignedOut } from "@clerk/nextjs";
import AppComingSoon from "~/app/_components/errors/app-coming-soon";

export default async function () {
	return (
		<SignedOut>
			<AppComingSoon />
		</SignedOut>
	);
}
