"use client";

import { useState } from "react";
import { Button, ButtonLabel } from "~/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";
import { Input } from "~/app/_components/ui/input";
import { titleCase } from "~/lib/utils";

type Price = {
	monthly: number;
	yearly: number;
};

interface PricingCardProps {
	buttonVariant?: "outline" | "secondary";
	name: string;
	description: string | React.ReactNode | null;
	price: Price;
	bulletPoints: string[];
	isSelected: boolean;
	setIsSelected: () => void;
}

function PricingCard({
	name,
	description,
	price,
	bulletPoints,
	isSelected,
	setIsSelected,
}: PricingCardProps) {
	return (
		<Card
			className="data-[selected=true]:ring-2 data-[selected=true]:ring-muted-foreground"
			data-selected={isSelected}
		>
			<CardHeader className="space-y-4">
				<CardTitle>{titleCase(name)}</CardTitle>
				<CardDescription className="space-y-4 text-muted-foreground">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="pb-4 space-x-1">
					<span className="text-3xl font-semibold">${price.monthly}</span>
					<span className="text-muted-foreground text-sm">/month</span>
				</div>
				<ul className="ml-6 list-disc [&>li]:mt-2 text-sm ">
					{bulletPoints.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</CardContent>
			<CardFooter className="pt-4">
				<Input
					type="radio"
					name="plan"
					id={name}
					value={name}
					className="hidden"
					onChange={() => setIsSelected()}
					defaultChecked={isSelected}
				/>
				<ButtonLabel
					role="radio"
					htmlFor={name}
					variant={isSelected ? "default" : "outline"}
					className="w-full"
				>
					{isSelected ? "Selected" : "Select"}
				</ButtonLabel>
			</CardFooter>
		</Card>
	);
}

export default function ChoosePlan() {
	const [selectedPlan, setSelectedPlan] = useState<"free" | "premium">("free");

	return (
		<div>
			<div className="space-y-8">
				<div className="space-y-2">
					<div className="text-2xl font-bold">Choose Your Plan</div>
					<div className=" text-muted-foreground ">
						Upgrade to unlock premium features and manage multiple businesses.
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<PricingCard
						name="free"
						description="For small businesses looking to manage a single location using only basic features."
						price={{ monthly: 0, yearly: 0 }}
						bulletPoints={[
							"Single business",
							"Default negative and positive review filters",
							"Automated review responses",
						]}
						isSelected={selectedPlan === "free"}
						setIsSelected={() => setSelectedPlan("free")}
					/>
					<PricingCard
						name="premium"
						description="For growing businesses looking to manage multiple locations and unlock premium features."
						price={{ monthly: 5, yearly: 50 }}
						bulletPoints={[
							"Multiple Businesses",
							"Custom review filters",
							"Automated and manual review responses",
							// "Detailed analytics and reporting",
						]}
						isSelected={selectedPlan === "premium"}
						setIsSelected={() => setSelectedPlan("premium")}
					/>
				</div>
			</div>
		</div>
	);
}
