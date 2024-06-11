import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Button, ButtonLink } from "~/app/_components/ui/button";
import {
	addBusinessAccount,
	getIsBusinesses,
} from "~/server/queries/businesses";
import { getIsFilters } from "./filters/actions";

// TODO a fake create business account function
export default async function Dashboard() {
	const isBusinesses = await getIsBusinesses();

	const isFilters = await getIsFilters();

	return (
		<>
			{!isBusinesses && <ConnectBusiness />}
			{isBusinesses && !isFilters && <AddFilter />}
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
			{/* <ButtonLink href="/api/auth/google">Get Started</ButtonLink> */}
			<form action={addBusinessAccount}>
				<Button type="submit">Connect</Button>
			</form>
		</div>
	);
}

function AddFilter() {
	return (
		<div className="border flex justify-between items-center px-4 py-3 rounded-md bg-secondary text-secondary-foreground">
			<div className="flex items-center gap-2">
				<ExclamationTriangleIcon />
				<span>You haven't added any filters.</span>
			</div>

			{/* <ButtonLink href="/api/auth/google">Get Started</ButtonLink> */}
			<ButtonLink href="/filters">Add Filters</ButtonLink>
		</div>
	);
}
