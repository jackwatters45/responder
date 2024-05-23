import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import NotFound from "~/app/_components/errors/not-found";
import Sidebar from "../_components/nav/sidebar-nav";

export default async function Layout({
	children,
	params: { id },
}: {
	children: React.ReactNode;
	params: { id: string };
}) {
	const { sessionClaims } = auth();

	if (sessionClaims && sessionClaims.username !== id) {
		return (
			<NotFound email={sessionClaims.email} username={sessionClaims.username} />
		);
	}

	return (
		<>
			<SignedIn>
				<div className="flex flex-col lg:grid lg:grid-cols-5 flex-1">
					<Sidebar
						items={[
							{
								href: `/${id}`,
								title: "Home",
							},
							{
								href: `/${id}/filters`,
								title: "Filters",
							},
							{
								href: `/${id}/settings`,
								title: "Settings",
							},
							{
								href: `/${id}/onboarding`,
								title: "Onboarding",
							},
							{
								href: `/${id}/billing`,
								title: "Plan & Billing",
							},
						]}
					/>
					<div className="col-span-3 lg:col-span-4 p-5 pt-[4.25rem] lg:pt-5">
						{children}
					</div>
				</div>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
}
