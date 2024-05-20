import type { JSX, SVGProps } from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "~/app/_components/ui/avatar";
import { Button } from "~/app/_components/ui/button";
import { Card, CardContent } from "~/app/_components/ui/card";

export default async function Home() {
	return (
		<main className="flex flex-col">
			<section className="bg-secondary py-20 md:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid md:grid-cols-2 items-center">
						<div className="space-y-4">
							<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
								Automate Your Google My Business Replies
							</h1>
							<p className="text-muted-foreground text-lg md:text-xl">
								Use OpenAI to generate personalized responses and save time managing
								your Google My Business listings.
							</p>
							<Button size="lg" variant="default">
								Get Started
							</Button>
						</div>
						<div className="hidden md:block">
							<img
								alt="Hero"
								className="rounded-xl object-cover -rotate-6"
								// height={400}
								src="/responder-full-scene.webp"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 bg-background md:py-20">
				<div className="container px-4 md:px-6">
					<div className="space-y-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								How it Works
							</h2>
							<p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
								Our app makes it easy to automate your Google My Business replies.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="space-y-4 text-center">
								<ClipboardIcon className="w-12 h-12 mx-auto text-muted-foreground" />
								<h3 className="text-xl font-semibold">Connect Your Accounts</h3>
								<p className="text-muted-foreground ">
									Link your Google My Business accounts to our app.
								</p>
							</div>
							<div className="space-y-4 text-center">
								<LightbulbIcon className="w-12 h-12 mx-auto text-muted-foreground " />
								<h3 className="text-xl font-semibold">Customize Responses</h3>
								<p className="text-muted-foreground ">
									Use our AI-powered tools to craft personalized responses.
								</p>
							</div>
							<div className="space-y-4 text-center">
								<RocketIcon className="w-12 h-12 mx-auto text-muted-foreground " />
								<h3 className="text-xl font-semibold">Automate and Save Time</h3>
								<p className="text-muted-foreground ">
									Schedule and automatically post your responses.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg- py-12 bg-secondary md:py-20">
				<div className="container px-4 md:px-6">
					<div className="space-y-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Key Features
							</h2>
							<p className="text-muted-foreground  mt-2 max-w-3xl mx-auto">
								Our app offers a range of features to streamline your Google My Business
								management.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-background rounded-lg shadow-md p-6 space-y-4">
								<SettingsIcon className="w-10 h-10 text-muted-foreground " />
								<h3 className="text-xl font-semibold">Customizable Responses</h3>
								<p className="text-muted-foreground ">
									Tailor your responses to each customer's needs using our AI-powered
									tools.
								</p>
							</div>
							<div className="bg-background rounded-lg shadow-md p-6 space-y-4">
								<CalendarIcon className="w-10 h-10 text-muted-foreground " />
								<h3 className="text-xl font-semibold">Scheduling and Automation</h3>
								<p className="text-muted-foreground ">
									Schedule your responses in advance and let our app handle the rest.
								</p>
							</div>
							<div className="bg-background rounded-lg shadow-md p-6 space-y-4">
								<PieChartIcon className="w-10 h-10 text-muted-foreground " />
								<h3 className="text-xl font-semibold">Detailed Analytics</h3>
								<p className="text-muted-foreground ">
									Track the performance of your responses and optimize your strategy.
								</p>
							</div>
							<div className="bg-background rounded-lg shadow-md p-6 space-y-4">
								<SignalIcon className="w-10 h-10 text-muted-foreground " />
								<h3 className="text-xl font-semibold">Real-time Notifications</h3>
								<p className="text-muted-foreground ">
									Get alerted when new reviews or messages come in, so you can respond
									quickly.
								</p>
							</div>
							<div className="bg-background rounded-lg shadow-md p-6 space-y-4">
								<MergeIcon className="w-10 h-10 text-muted-foreground " />
								<h3 className="text-xl font-semibold">Team Collaboration</h3>
								<p className="text-muted-foreground ">
									Invite your team members to manage your Google My Business listings
									together.
								</p>
							</div>
							<div className="bg-background rounded-lg shadow-md p-6 space-y-4">
								<SettingsIcon className="w-10 h-10 text-muted-foreground " />
								<h3 className="text-xl font-semibold">Dedicated Support</h3>
								<p className="text-muted-foreground ">
									Our team is available to help you get the most out of our app.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 md:py-20">
				<div className="container px-4 md:px-6">
					<div className="space-y-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								What Our Customers Say
							</h2>
							<p className="text-muted-foreground  mt-2 max-w-3xl mx-auto">
								Hear from businesses that have used our app to streamline their Google
								My Business management.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Card>
								<CardContent className="pt-6">
									<blockquote className="text-lg font-medium text-foreground">
										"Using this app has saved us so much time and hassle. The automated
										responses are spot on, and we've seen a significant improvement in our
										customer engagement."
									</blockquote>
									<div className="mt-4 flex items-center space-x-4">
										<Avatar>
											<AvatarImage src="/placeholder-avatar.svg" />
											<AvatarFallback>JD</AvatarFallback>
										</Avatar>
										<div>
											<div className="font-medium">John Doe</div>
											<div className="text-sm text-muted-foreground">Owner, Acme Corp</div>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="pt-6">
									<blockquote className="text-lg font-medium text-foreground">
										"This app has been a game-changer for our business. The AI-powered
										responses are so natural and personalized, our customers can't even
										tell they're automated."
									</blockquote>
									<div className="mt-4 flex items-center space-x-4">
										<Avatar>
											<AvatarImage src="/placeholder-avatar.svg" />
											<AvatarFallback>JA</AvatarFallback>
										</Avatar>
										<div>
											<div className="font-medium">Jane Appleseed</div>
											<div className="text-sm text-muted-foreground">
												Marketing Manager, Widget Inc
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="pt-6">
									<blockquote className="text-lg font-medium text-foreground">
										"I was skeptical at first, but this app has completely transformed the
										way we manage our Google My Business listings. It's a must-have for
										any business owner."
									</blockquote>
									<div className="mt-4 flex items-center space-x-4">
										<Avatar>
											<AvatarImage src="/placeholder-avatar.svg" />
											<AvatarFallback>SM</AvatarFallback>
										</Avatar>
										<div>
											<div className="font-medium">Sarah Miller</div>
											<div className="text-sm text-muted-foreground">
												CEO, Startup Ventures
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

function CalendarIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	);
}

function ClipboardIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
		</svg>
	);
}

function LightbulbIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
			<path d="M9 18h6" />
			<path d="M10 22h4" />
		</svg>
	);
}

function MergeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 6 4-4 4 4" />
			<path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
			<path d="m20 22-5-5" />
		</svg>
	);
}

function PieChartIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
			<path d="M22 12A10 10 0 0 0 12 2v10z" />
		</svg>
	);
}

function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
			<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
			<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
		</svg>
	);
}

function SettingsIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

function SignalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2 20h.01" />
			<path d="M7 20v-4" />
			<path d="M12 20v-8" />
			<path d="M17 20V8" />
			<path d="M22 4v16" />
		</svg>
	);
}
