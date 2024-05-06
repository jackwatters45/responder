import { auth } from "@clerk/nextjs/server";
import { CheckIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";

import { cn } from "~/lib/utils";

import { Button } from "~/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";
import { Label } from "~/app/_components/ui/label";
import { Textarea } from "~/app/_components/ui/textarea";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/app/_components/ui/select";
import { Switch } from "~/app/_components/ui/switch";

// content will also defintely need to exist in the dashboard -> components
export default async function Dashboard({
	params: { id },
}: {
	params: { id: string };
}) {
	const { sessionClaims } = auth();

	const isOnboarded = sessionClaims?.publicMetaData?.isOnboarded ?? false;

	//  if onboarded -> redirecct
	if (isOnboarded) redirect(`/${id}`);

	return (
		<>
			<div className="space-y-4">
				<div>
					<div>- connect google my business account</div>
					<div>- select one to use for basic or multiple for premium</div>
				</div>
				<div>
					<div>set up filters</div>
					<div>- default to just the two options - negative + positive</div>
					<div>- (premium) allow for custom filters</div>
				</div>
				<div>
					<div>set up each path</div>
					<div>- set up gpt prompts</div>
					<div>
						- option to send email instead of actually creating the reply for negative
						reviews
					</div>
					<div>- time range for responses</div>
				</div>
				<div>
					<li>choose a plan</li>
				</div>
				<div>make sure to set onboarded to true</div>
			</div>
			{/* v0 */}
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-3xl space-y-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Welcome to Acme Reviews
						</h1>
						<p className="mt-4 text-gray-500 dark:text-gray-400">
							Let's get you set up to start managing your reviews.
						</p>
					</div>
					<div>
						<div>
							<div>
								<div>Connect Google My Business</div>
								<div>
									Link your Google My Business account to start managing your reviews.
								</div>
							</div>
							<div>
								<div className="flex flex-col items-center justify-center gap-4">
									<Button size="lg" variant="outline">
										<ChromeIcon />
										Connect Google My Business
									</Button>
									<p className="text-gray-500 dark:text-gray-400">
										You'll be redirected to Google to authorize the connection.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div>Set Up Review Filters</div>
								<div>
									Configure your default filters for negative and positive reviews.
								</div>
							</div>
							<div>
								<div className="grid gap-6">
									<div>
										<Label htmlFor="negative-filter">Negative Review Filter</Label>
										<Textarea
											className="mt-2"
											id="negative-filter"
											placeholder="Enter keywords to filter negative reviews"
										/>
									</div>
									<div>
										<Label htmlFor="positive-filter">Positive Review Filter</Label>
										<Textarea
											className="mt-2"
											id="positive-filter"
											placeholder="Enter keywords to filter positive reviews"
										/>
									</div>
									<div>
										<Label htmlFor="custom-filters">Custom Filters</Label>
										<Textarea
											className="mt-2"
											id="custom-filters"
											placeholder="Enter custom filters"
										/>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div>Set Up Review Responses</div>
								<div>
									Configure your GPT prompt templates for automated review responses.
								</div>
							</div>
							<div>
								<div className="grid gap-6">
									<div>
										<Label htmlFor="negative-response">Negative Review Response</Label>
										<Textarea
											className="mt-2"
											id="negative-response"
											placeholder="Enter your GPT prompt template for negative reviews"
										/>
									</div>
									<div>
										<Label htmlFor="positive-response">Positive Review Response</Label>
										<Textarea
											className="mt-2"
											id="positive-response"
											placeholder="Enter your GPT prompt template for positive reviews"
										/>
									</div>
									<div className="flex items-center gap-2">
										<Switch id="manual-response" />
										<Label htmlFor="manual-response">
											Send email instead of auto-generating replies for negative reviews
										</Label>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div>Set Response Timing</div>
								<div>Choose when you'd like to send automated review responses.</div>
							</div>
							<div>
								<div className="grid gap-6">
									<div>
										<Label htmlFor="response-time">Response Time</Label>
										<Select defaultValue="24">
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select response time" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="12">Within 12 hours</SelectItem>
												<SelectItem value="24">Within 24 hours</SelectItem>
												<SelectItem value="48">Within 48 hours</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div>Choose Your Plan</div>
								<div>Select the plan that best fits your needs.</div>
							</div>
							<div>
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<Card>
										<CardHeader>
											<CardTitle>Basic</CardTitle>
											<CardDescription>$9/month</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2 text-gray-500 dark:text-gray-400">
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Single Google My Business account
												</li>
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Default negative and positive review filters
												</li>
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Automated review responses
												</li>
											</ul>
										</CardContent>
										<CardFooter>
											<Button className="w-full" size="lg">
												Select Basic
											</Button>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Premium</CardTitle>
											<CardDescription>$29/month</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2 text-gray-500 dark:text-gray-400">
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Multiple Google My Business accounts
												</li>
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Custom review filters
												</li>
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Automated and manual review responses
												</li>
												<li className="flex items-center gap-2">
													<CheckIcon className="h-4 w-4 text-green-500" />
													Detailed analytics and reporting
												</li>
											</ul>
										</CardContent>
										<CardFooter>
											<Button className="w-full" size="lg">
												Select Premium
											</Button>
										</CardFooter>
									</Card>
								</div>
							</div>
						</div>
						<div>
							<Button className="mr-auto" variant="outline">
								Back
							</Button>
							<Button>Complete Onboarding</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function ChromeIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Chrome Icon"
			className={cn("h-5 w-5", className)}
			{...props}
		>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="4" />
			<line x1="21.17" x2="12" y1="8" y2="8" />
			<line x1="3.95" x2="8.54" y1="6.06" y2="14" />
			<line x1="10.88" x2="15.46" y1="21.94" y2="14" />
		</svg>
	);
}
