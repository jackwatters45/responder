import { SignOutButton } from "@clerk/nextjs";
import { Button, ButtonLink } from "~/app/_components/ui/button";

export default function NotFound({
	email,
	username,
}: { email?: string; username?: string }) {
	return (
		<div className="flex flex-col gap-5 flex-1 items-center  pt-24 sm:pt-36 lg:pt-48">
			<div className="text-9xl font-bold">404</div>
			<div className="text-lg text-muted-foreground font-light">
				{email && <span>You are logged in as {email}</span>}
				{/* TODO other words */}
			</div>
			<div className="flex gap-5 ">
				<ButtonLink variant={"secondary"} href={`/${username}`}>
					Go to Dashboard
				</ButtonLink>
				<SignOutButton redirectUrl="/dashboard">
					<Button variant="outline">Change Account</Button>
				</SignOutButton>
			</div>
		</div>
	);
}
