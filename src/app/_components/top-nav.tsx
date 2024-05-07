"use client";

import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
	useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "./ui/navigation-menu";

export function TopNav() {
	const { isLoaded, isSignedIn, user } = useUser();

	return (
		<NavigationMenu className="max-w-screen fixed z-50 flex  h-14 w-screen justify-center lg:border-b bg-opacity-90 px-8 dark:border-opacity-20 dark:bg-opacity-80">
			<div className="flex w-full items-center justify-between">
				<NavigationMenuItem>
					<SignedOut>
						<NavigationMenuLink href="/" className="flex items-center gap-3">
							<Image src="/favicon.ico" alt="Company Logo" width={20} height={20} />
							<span>Responder</span>
						</NavigationMenuLink>
					</SignedOut>
					<SignedIn>
						<NavigationMenuLink href="/dashboard" className="flex items-center gap-3">
							<div className="flex items-center gap-3">
								<Image src="/favicon.ico" alt="Company Logo" width={20} height={20} />
								<span>Responder</span>
							</div>
							{isLoaded && isSignedIn && (
								<div className="flex items-center gap-3">
									<SlashIcon />
									<div className="text-sm text-muted-foreground">{user.username}</div>
								</div>
							)}
						</NavigationMenuLink>
					</SignedIn>
				</NavigationMenuItem>
				<div>
					<SignedOut>{/* <SignInButton /> */}</SignedOut>
					<SignedIn>
						<div className="flex items-center gap-6 text-sm font-normal">
							<div className="flex items-center gap-4">
								<NavigationMenuLink
									href="/dashboard"
									className="text-muted-foreground hover:text-foreground transition-all"
								>
									Dashboard
								</NavigationMenuLink>
							</div>
							<div className="leading-[0px]">
								<UserButton />
							</div>
						</div>
					</SignedIn>
				</div>
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
