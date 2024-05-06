import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import NotFound from "~/_components/errors/not-found";
import Sidebar from "../_components/sidebar-nav";

export default async function Layout({
	children,
	params: { id },
}: {
	children: React.ReactNode;
	params: { id: string };
}) {
	const user = await currentUser();

	if (user?.username && user.username !== id) {
		return (
			<NotFound
				email={user.emailAddresses?.[0]?.emailAddress}
				username={user.username}
			/>
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
								title: "Dashboard",
							},
							{
								href: `/${id}/settings`,
								title: "Settings",
							},
						]}
					/>
					<div className="col-span-3 lg:col-span-4 p-5">{children}</div>
				</div>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
}
