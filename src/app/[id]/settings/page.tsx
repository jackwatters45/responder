import { getUserBusinesses } from "~/server/queries";

import BusinessesForm from "~/app/_components/businesses/businesses-form";
import ConnectGoogle from "~/app/_components/connect-google";

export default async function Settings() {
	const businesses = await getUserBusinesses();

	console.log(businesses);
	if (!businesses) return "error";

	if (businesses?.length === 0) return "account has no associated businesses";

	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Settings
						</h1>
						<p className="pt-4 text-muted-foreground">Manage your account settings</p>
					</div>
					<div className="space-y-8 p-6 border rounded-lg shadow-md">
						<div>
							<legend className="text-2xl font-bold tracking-tight ">
								Choose Business to Manage
							</legend>
							<p className="pt-4 text-muted-foreground">
								One business is included with the free plan. Upgrade later to manage
								multiple businesses.
							</p>
						</div>
						<BusinessesForm businesses={businesses} />
					</div>
				</div>
			</div>
		</div>
	);
}
