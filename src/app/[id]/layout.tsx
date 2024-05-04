import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import NotFound from "~/_components/errors/not-found";
import { Button } from "~/_components/ui/button";
import { cn } from "~/lib/utils";

// TODO commits
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
				<div className="grid lg:grid-cols-5 flex-1">
					<Sidebar className="hidden lg:block" />
					<div className="col-span-3 lg:col-span-4 p-5">{children}</div>
				</div>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

// TODO active
export function Sidebar({ className }: SidebarProps) {
	const isActive = true;
	return (
		<div className={cn("pb-12 pt-6 px-3 space-y-1", className)}>
			<Button
				variant={isActive ? "secondary" : "ghost"}
				className="w-full justify-start"
			>
				Dashboard
			</Button>
		</div>
	);
}
