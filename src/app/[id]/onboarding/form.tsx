"use client";

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

import { useFormState } from "react-dom";
import { Form } from "~/app/_components/ui/form";
import { Input } from "~/app/_components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "~/app/_components/ui/select";
import { Separator } from "~/app/_components/ui/separator";
import { Switch } from "~/app/_components/ui/switch";
import { createConfig } from "./actions";
import { SubmitButton } from "./submit-button";

const initialState = {
	message: "",
};

// You can use the React useOptimistic hook to optimistically update the UI before the Server Action finishes, rather than waiting for the response:
// const [optimisticMessages, addOptimisticMessage] = useOptimistic<
// Message[],
// string
// >(messages, (state, newMessage) => [...state, { message: newMessage }])

// programatic form submission
// const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
// 	if (
// 		(e.ctrlKey || e.metaKey) &&
// 		(e.key === 'Enter' || e.key === 'NumpadEnter')
// 	) {
// 		e.preventDefault()
// 		e.currentTarget.form?.requestSubmit()
// 	}
// }

// TODO
// pricing
// style
// specific logic (rendering, values, conditional shit, etc)
// default negative and positive review filters
// default prompt
// one business should fit whole row (grid -> fit full row when only one)
// toggle mode get make work
// read dis: <https://nextjs.org/docs/app/building-your-application/data-fetching/patterns>
// content will also defintely need to exist in the dashboard -> components
export default function DashboardForm() {
	// form shite
	const [state, formAction] = useFormState(createConfig, initialState);

	// const [isBusinessConnected, setIsBusinessConnected] = React.useState(false);

	// would move to actions file

	// how to add additional arguments
	// const updateUserWithId = updateUser.bind(null, userId)
	// export async function updateUser(userId, formData) {

	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Welcome to Responder
						</h1>
						<p className="pt-4 text-muted-foreground">
							Let's get you set up to start managing your reviews.
						</p>
					</div>
					{/* <ConnectGoogle /> */}
					<form action="" className="space-y-8">
						<ChooseBusinesses />
						<ChoosePlan />
						<ResponsePrompts />
						<div className="w-full flex items-center justify-between">
							<Button className="mr-auto" variant="outline">
								+ Add Filter
							</Button>
							<SubmitButton>
								<div>Complete Onboarding</div>
							</SubmitButton>
						</div>
						{/* error example */}
						<p aria-live="polite" className="sr-only">
							{state?.message}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

function ConnectGoogle() {
	return (
		<Card>
			<CardHeader className="space-y-4">
				<CardTitle>Connect Google My Business</CardTitle>
				<CardDescription className="space-y-4">
					<div className="text-muted-foreground">
						Link your Google My Business account to start managing your reviews.
					</div>
					<div className="text-muted-foreground">
						You can manage one business on the free plan. Upgrade to manage multiple
						businesses and unlock premium features.
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button
					size="lg"
					variant="outline"
					className="w-full flex items-center gap-2"
				>
					Connect Google My Business
				</Button>
			</CardContent>
			<CardFooter className="text-muted-foreground text-sm">
				You'll be redirected to Google to authorize the connection.
			</CardFooter>
		</Card>
	);
}

interface BusinessPreview {
	id: number;
	name: string;
	type: string;
	address: { street: string; city: string; state: string; zip: string };
	rating: number;
	reviewCount: number;
}

const businesses: BusinessPreview[] = [
	{
		id: 1,
		name: "Business 1",
		type: "Google My Business",
		address: {
			street: "123 First St",
			city: "Springfield",
			state: "IL",
			zip: "62701",
		},
		rating: 4.5,
		reviewCount: 100,
	},
	{
		id: 2,
		name: "Business 2",
		type: "Google My Business 2",
		address: {
			street: "321 Second St",
			city: "Springfield",
			state: "IL",
			zip: "62701",
		},
		rating: 4.2,
		reviewCount: 55,
	},
];

function ChooseBusinesses() {
	return (
		<div className="space-y-8 pt-8">
			<div>
				<h1 className="text-2xl font-bold tracking-tight ">
					Choose Business to Manage
				</h1>
				<p className="pt-4 text-muted-foreground">
					One business is included with the free plan. Upgrade to manage multiple
					businesses.
				</p>
			</div>
			<div className="grid grid-cols-2 gap-4">
				{businesses.map((business) => (
					<BusinessPreview key={business.id} {...business} />
				))}
			</div>
		</div>
	);
}

function BusinessPreview(props: BusinessPreview) {
	return (
		<Card className="w-full">
			<CardHeader className="space-y-4">
				<CardTitle>{props.name}</CardTitle>
				<CardDescription className="space-y-4">
					<div className="text-muted-foreground">
						{props.type} in {props.address.city}, {props.address.state}
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2">
					<div className="text-xl font-bold">{props.rating}</div>
					<div className="text-muted-foreground">({props.reviewCount} reviews)</div>
				</div>
			</CardContent>
			<CardFooter className="text-muted-foreground text-sm flex items-center justify-between">
				<div>Manage Business</div>
				<Switch />
			</CardFooter>
		</Card>
	);
}

function ResponseSetting({ id }: { id: string }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<span>Review {"`some-key`"}</span>
					edit icon
				</CardTitle>
				<div className="pt-2" />
				<Separator />
			</CardHeader>
			<CardContent className="space-y-8">
				<div className="space-y-4">
					<Label htmlFor={`${id}-filter`}>Filter</Label>
					<div className="flex items-center gap-2">
						<span>Review is </span>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select comparison" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Comparison</SelectLabel>
									<SelectItem value="==">equal to</SelectItem>
									<SelectItem value="<=">less than or equal to</SelectItem>
									<SelectItem value=">=">greater than or equal to</SelectItem>
									<SelectItem value="<">less than</SelectItem>
									<SelectItem value=">">greater than</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="w-[180px]" id="negative-filter">
								<SelectValue placeholder="Select rating" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Ratings</SelectLabel>
									<SelectItem value="1">1 - Very Bad</SelectItem>
									<SelectItem value="2">2 - Bad</SelectItem>
									<SelectItem value="3">3 - Okay</SelectItem>
									<SelectItem value="4">4 - Good</SelectItem>
									<SelectItem value="5">5 - Very Good</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<span>stars</span>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor={`${id}-prompt`}>Prompt</Label>
					<Textarea
						id={`${id}-prompt`}
						placeholder="Enter your GPT prompt template"
					/>
				</div>

				<div className="flex items-center gap-2">
					<Switch id={`${id}-manual-response`} />
					<Label htmlFor={`${id}-manual-response`}>
						Send email instead of auto-generating replies for negative reviews
					</Label>
				</div>

				<div className="space-y-2">
					<Label htmlFor="response-time">Response Time</Label>
					<div className="flex items-center gap-2">
						<Select defaultValue="24">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select response range" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="12">Exactly</SelectItem>
								<SelectItem value="24">Between</SelectItem>
							</SelectContent>
						</Select>

						<Input />
						<span>and</span>
						<Input />

						<Select defaultValue="minutes">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select response range" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="minutes">Minutes</SelectItem>
								<SelectItem value="hours">Hours</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function ResponsePrompts() {
	return (
		<div>
			<div className="space-y-8 pt-8">
				<div className="space-y-2">
					<div className="text-2xl font-bold">Add Filters</div>
					<div className=" text-muted-foreground ">
						Configure your filters based on review rating
					</div>
				</div>
				<div className="grid gap-6">
					<ResponseSetting id="id" />
				</div>
			</div>
		</div>
	);
}

const pricing = [
	{
		title: "Basic",
		description: "$9/month",
		features: [
			"Single Business",
			"Default negative and positive review filters",
			"Automated review responses",
		],
	},
	{
		title: "Premium",
		description: "$29/month",
		features: [
			"Multiple Businesses",
			"Custom review filters",
			"Automated and manual review responses",
			"Detailed analytics and reporting",
		],
	},
];

function ChoosePlan() {
	return (
		<div>
			<div className="space-y-8 pt-8">
				<div className="space-y-2">
					<div className="text-2xl font-bold">Choose Your Plan</div>
					<div className=" text-muted-foreground ">
						Upgrade to unlock premium features and manage multiple businesses.
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<Card className="flex flex-col">
						<CardHeader className="space-y-4">
							<CardTitle>Free</CardTitle>
							<CardDescription className="space-y-4 text-muted-foreground">
								For small businesses looking to manage a single location using only
								basic features.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="ml-6 list-disc [&>li]:mt-2 text-sm ">
								<li>One business</li>
								<li>Positive and negative filters</li>
								<li>Automated responses</li>
							</ul>
						</CardContent>
						<CardFooter className="flex-1 items-end">
							<Button variant={"secondary"} className="w-full ">
								Selected
							</Button>
						</CardFooter>
					</Card>

					<Card className="flex flex-col">
						<CardHeader className="space-y-4">
							<CardTitle>Premium</CardTitle>
							<CardDescription className="space-y-4 text-muted-foreground">
								For growing businesses looking to manage multiple locations and unlock
								premium features.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="ml-6 list-disc [&>li]:mt-2 text-sm ">
								<li>Unlimited businesses</li>
								<li>Unlimited custom filters</li>
								<li>Automated and manual responses</li>
							</ul>
						</CardContent>
						<CardFooter className="flex-1 items-end">
							<Button variant={"outline"} className="w-full">
								Select
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
