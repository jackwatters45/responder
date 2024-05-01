import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Link from "next/link";
import { TopNav } from "./_components/top-nav";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: "Responder",
	description: "TODO - get it respond-er or responder",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`font-sans ${inter.variable} dark`}>
				<ClerkProvider>
					<div className="font-sans flex min-h-screen flex-col items-center gap-4">
						<TopNav />
						<main className="w-full max-w-screen-xl flex-1 pt-14 2xl:max-w-screen-2xl">
							{children}
						</main>
						<Footer />
					</div>
				</ClerkProvider>
			</body>
		</html>
	);
}

function Footer() {
	return (
		<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 text-xs sm:flex-row md:px-6 ">
			<p className=" ">
				© {new Date().getFullYear()} Yats Co. All rights reserved.
			</p>
			<nav className="flex gap-4 sm:ml-auto sm:gap-6">
				<Link className=" underline-offset-4 hover:underline" href="/terms">
					Terms of Service
				</Link>
				<Link className=" underline-offset-4 hover:underline" href="/privacy">
					Privacy
				</Link>
			</nav>
		</footer>
	);
}
