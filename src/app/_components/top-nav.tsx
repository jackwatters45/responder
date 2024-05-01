"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "./ui/navigation-menu";

export function TopNav() {
	return (
		<NavigationMenu className="max-w-screen fixed z-50 flex  h-14 w-screen justify-center border-b bg-opacity-90 px-8 dark:border-opacity-20  dark:bg-opacity-80">
			<div className="flex w-full max-w-screen-xl items-center justify-between">
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className="flex items-center gap-3">
						<Image src="/favicon.ico" alt="Company Logo" width={20} height={20} />
						<span>Team Send</span>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<div>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</NavigationMenu>
	);
}
