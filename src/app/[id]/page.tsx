import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Button } from "~/app/_components/ui/button";
import { getUserBusinesses } from "~/server/queries";
import ComingSoon from "../_components/errors/coming-soon";

export default async function Dashboard({
	params: { id },
}: {
	params: { id: string };
}) {
	const businesses = await getUserBusinesses();

	return (
		<>
			{!businesses?.length && <ConnectBusiness />}
			<ComingSoon />
		</>
	);
}

function ConnectBusiness() {
	return (
		<div className="border flex justify-between items-center px-4 py-3 rounded-md bg-secondary text-secondary-foreground">
			<div className="flex items-center gap-2">
				<ExclamationTriangleIcon />
				<span>You haven't connected a Google Business yet.</span>
			</div>
			{/* TODO uncomment out once quota increased */}
			{/* <ButtonLink href="/api/auth/google">Get Started</ButtonLink> */}
			<form
				action={async () => {
					"use server";
					// await addBusinessAccount();
				}}
			>
				<Button type="submit">connect</Button>
			</form>
		</div>
	);
}
