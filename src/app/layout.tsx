import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

import { TopNav } from "./_components/nav/top-nav";
import Providers from "./_components/providers/providers";
import { Toaster } from "./_components/ui/toaster";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: "Responder",
	description: "Optimize Google Business replies using OpenAI (Chat-GPT)",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`font-sans ${inter.variable}`}>
				<Providers>
					<div className="font-sans flex min-h-screen flex-col items-center">
						<TopNav />
						<main className="w-full flex-1 pt-14 flex flex-col">
							{children}
							{modal}
							<div id="modal-route" />
							<Toaster />
						</main>
						<Footer />
					</div>
				</Providers>
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
