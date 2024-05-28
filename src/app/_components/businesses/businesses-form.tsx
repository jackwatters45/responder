"use client";

import { useState } from "react";

import { cn, getIsLastSingle } from "~/lib/utils";
import type { GetUserBusinessesSuccessReturn } from "~/server/queries";
import { editActiveBusinesses } from "./actions";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";
import { Switch } from "~/app/_components/ui/switch";
import { toast } from "~/app/_components/ui/use-toast";

export default function BusinessesForm({
	businesses,
}: { businesses: GetUserBusinessesSuccessReturn }) {
	return (
		<div className="grid grid-cols-2 gap-4">
			{businesses?.map((business, i) => (
				<BusinessPreviewCard
					key={business.id}
					{...business}
					isLastSingle={getIsLastSingle(i, businesses.length)}
				/>
			))}
		</div>
	);
}

function BusinessPreviewCard(
	props: GetUserBusinessesSuccessReturn[number] & {
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
					{props.type} in {props.city}, {props.state}
				</CardDescription>
			</CardHeader>
			<CardContent className=" flex flex-col sm:flex-row sm:items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="text-xl font-bold">{props.rating}</div>
					<div className="text-muted-foreground">({props.reviewCount} reviews)</div>
				</div>
				<form
					className="self-end sm:self-auto pt-4 sm:pt-0"
					action={async (formData) => {
						const res = await editActiveBusinesses(props.id, formData);
						if (!res) {
							toast({
								title: "Failed to select plan",
								description: "An unexpected error occurred. Please try again.",
								variant: "destructive",
							});
						}
					}}
				>
					<Switch
						name={props.id}
						id={`${props.id}-toggle`}
						onCheckedChange={() => setSelected((prev) => !prev)}
						defaultChecked={false}
						type="submit"
					/>
				</form>
			</CardContent>
		</Card>
	);
}
