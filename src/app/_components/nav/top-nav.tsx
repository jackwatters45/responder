import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { Button } from "../ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "../ui/navigation-menu";
import { ThemeToggle } from "../ui/theme-toggle";

export async function TopNav() {
	const username = auth()?.sessionClaims?.username;

	return (
		<NavigationMenu className="bg-background max-w-none fixed z-50 flex h-14 w-full items-center justify-between lg:border-b px-8">
			<NavigationMenuItem>
				<SignedOut>
					<NavigationMenuLink href="/" className="flex items-center gap-3">
						<Image src="/favicon.ico" alt="Company Logo" width={20} height={20} />
						<span>Responder</span>
					</NavigationMenuLink>
				</SignedOut>
				<SignedIn>
					<NavigationMenuLink
						href={`/${username}` ?? "/dashboard"}
						className="flex items-center gap-3"
					>
						<div className="flex items-center gap-3">
							<Image src="/favicon.ico" alt="Company Logo" width={20} height={20} />
							<span>Responder</span>
						</div>
						{username && (
							<div className="flex items-center gap-3">
								<SlashIcon />
								<div className="text-sm text-muted-foreground">{username}</div>
							</div>
						)}
					</NavigationMenuLink>
				</SignedIn>
			</NavigationMenuItem>
			<div>
				<SignedOut>
					<div className="flex items-center gap-6 text-sm font-normal">
						<ThemeToggle />
						<SignInButton>
							<Button variant={"outline"}>Sign In</Button>
						</SignInButton>
					</div>
				</SignedOut>
				<SignedIn>
					<div className="flex items-center gap-6 text-sm font-normal">
						<div className="flex items-center gap-4">
							<NavigationMenuLink
								href={username ?? "/dashboard"}
								className="text-muted-foreground hover:text-foreground transition-all"
							>
								Dashboard
							</NavigationMenuLink>
						</div>
						<ThemeToggle />
						<div className="leading-[0px] w-[28px]">
							<UserButton />
						</div>
					</div>
				</SignedIn>
			</div>
		</NavigationMenu>
	);
}

function SlashIcon() {
	return (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			aria-label="Slash Icon"
			role="img"
		>
			<path
				d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
				className="fill-border"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</svg>
	);
}
