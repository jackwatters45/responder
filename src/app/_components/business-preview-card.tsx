"use client";

import { useState } from "react";

import type { BusinessPreview } from "types/business-preview";
import { cn, getIsLastSingle } from "~/lib/utils";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";
import { Label } from "~/app/_components/ui/label";
import { Switch } from "~/app/_components/ui/switch";

export default function ChooseBusinesses({
	businesses,
}: { businesses: BusinessPreview[] }) {
	return (
		<fieldset>
			<div className="space-y-8">
				<div>
					<legend className="text-2xl font-bold tracking-tight ">
						Choose Business to Manage
					</legend>
					<p className="pt-4 text-muted-foreground">
						One business is included with the free plan. Upgrade later to manage
						multiple businesses.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{businesses.map((business, i) => (
						<BusinessPreviewCard
							key={business.id}
							{...business}
							isLastSingle={getIsLastSingle(i, businesses.length)}
						/>
					))}
				</div>
			</div>
		</fieldset>
	);
}

function BusinessPreviewCard(
	props: BusinessPreview & {
		initialSelected?: boolean;
		isLastSingle: boolean | null;
	},
) {
	const [selected, setSelected] = useState(props.initialSelected ?? false);

	return (
		<Card
			className={cn(
				"data-[selected=true]:ring-2 data-[selected=true]:ring-muted-foreground",
				{
					"col-span-2": props.isLastSingle,
				},
			)}
			data-selected={selected}
		>
			<CardHeader className="space-y-4">
				<CardTitle>{props.name}</CardTitle>
				<CardDescription className="space-y-4 text-muted-foreground">
					{props.type} in {props.address.city}, {props.address.state}
				</CardDescription>
			</CardHeader>
			<CardContent className=" flex flex-col sm:flex-row sm:items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="text-xl font-bold">{props.rating}</div>
					<div className="text-muted-foreground">({props.reviewCount} reviews)</div>
				</div>
				<Label
					htmlFor={`${props.id}-toggle-input`}
					className="self-end sm:self-auto pt-4 sm:pt-0"
				>
					<Switch
						name={`business.${props.id}`}
						id={`${props.id}-toggle`}
						onCheckedChange={() => setSelected((prev) => !prev)}
						defaultChecked={false}
					/>
				</Label>
			</CardContent>
		</Card>
	);
}
