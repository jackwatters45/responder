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
			<body className={`font-sans ${inter.variable}`}>
				<ClerkProvider>{children}</ClerkProvider>
			</body>
		</html>
	);
}
