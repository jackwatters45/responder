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

type Price = {
	monthly: number;
	yearly: number;
};

interface PricingCardProps {
	buttonVariant?: "outline" | "secondary";
	title: string;
	description: string | React.ReactNode | null;
	price: Price;
	bulletPoints: string[];
	isSelected: boolean;
}

export default function PricingCard({
	title,
	description,
	price,
	bulletPoints,
	isSelected,
}: PricingCardProps) {
	return (
		<Card
			className="data-[selected=true]:border-2 data-[selected=true]:border-muted-foreground"
			data-selected={isSelected}
		>
			<CardHeader className="space-y-4">
				<CardTitle>{title}</CardTitle>
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
			<CardFooter className="pt-4 flex-1 items-end">
				<Button variant={isSelected ? "secondary" : "outline"} className="w-full ">
					{isSelected ? "Selected" : "Select"}
				</Button>
			</CardFooter>
		</Card>
	);
}
