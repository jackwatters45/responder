import { auth } from "@clerk/nextjs/server";

import PlanForm from "./form";

// TODO onboarding page
export default async function Billing() {
	const plan = auth().protect().sessionClaims?.publicMetaData?.plan;

	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Plan & Billing
						</h1>
						<p className="pt-4 text-muted-foreground">
							Manage your account plan and billing settings
						</p>
					</div>
					<PlanForm plan={plan} />
				</div>
			</div>
		</div>
	);
}
