"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { z } from "zod";

import type { Filter } from "types";
import { getDefaultFilter } from "./actions";

import { Button } from "~/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "~/app/_components/ui/card";
import { Input } from "~/app/_components/ui/input";
import { Label } from "~/app/_components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "~/app/_components/ui/select";
import { SubmitButton } from "~/app/_components/ui/submit-button";
import { Switch } from "~/app/_components/ui/switch";
import { Textarea } from "~/app/_components/ui/textarea";

export const filter = z.object({
	id: z.string(),
	name: z.string({ invalid_type_error: "Invalid Filter" }),
	filter: z.object({
		comparison: z.string(),
		rating: z.string(),
	}),
	prompt: z.string(),
	sendEmail: z.boolean(),
	responseTime: z.object({
		range: z.object({
			start: z.string(),
			end: z.string(),
		}),
		timeUnit: z.string(),
	}),
});

// TODO form submit
// TODO save state in local state or context
export default function Filters({ filters: initial }: { filters: Filter[] }) {
	const [parent] = useAutoAnimate();

	const [filters, setFilters] = useState<Filter[]>(initial);
	const addFilter = () => setFilters((prev) => [...prev, getDefaultFilter()]);
	const removeFilter = (id: string) => {
		if (filters.length < 2) return;
		setFilters((prev) => prev.filter((filter) => filter.id !== id));
	};

	return (
		<div className="space-y-8">
			<div className="grid gap-6" ref={parent}>
				{filters.map((filter) => (
					<FilterCard key={filter.id} id={filter.id} removeFilter={removeFilter} />
				))}
			</div>
			<div className="flex justify-end">
				<Button
					className="mr-auto"
					type="button"
					variant="outline"
					onClick={addFilter}
				>
					+ Add Filter
				</Button>
				<SubmitButton>Save Filters</SubmitButton>
			</div>
		</div>
	);
}

function FilterCard({
	id,
	removeFilter,
}: { id: string; removeFilter: (id: string) => void }) {
	return (
		<Card>
			<CardHeader className="space-y-2 ">
				<Label htmlFor={`filter.${id}.name`} className="text-xl">
					Name
				</Label>
				<Input
					id={`filter.${id}.name`}
					name={`filter.${id}.name`}
					placeholder="Positive Review, Negative Review, etc."
				/>
			</CardHeader>
			<CardContent className="space-y-8">
				<div className="space-y-2">
					<Label>Filter</Label>
					<div className="flex items-center gap-2 border py-2 px-4 rounded-md">
						<span>Review is </span>
						<Select name={`filter.${id}.filter.comparison`}>
							<SelectTrigger className="w-[200px]">
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
						<Select name={`filter.${id}.filter.rating`}>
							<SelectTrigger className="w-[150px]" id="negative-filter">
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
					<Label htmlFor={`filter.${id}.prompt`}>Prompt</Label>
					<Textarea
						id={`filter.${id}.prompt`}
						name={`filter.${id}.prompt`}
						placeholder="Enter your GPT prompt template"
					/>
				</div>
				<div className="flex items-center gap-2">
					<Switch
						id={`filter.${id}.manual-response`}
						name={`filter.${id}.manual-response`}
					/>
					<Label htmlFor={`filter.${id}.manual-response`}>
						Send email instead of auto-generating replies for negative reviews
					</Label>
				</div>
				<div className="space-y-2">
					<Label>Response Time</Label>
					<div className="flex items-center gap-2 border py-2 px-4 rounded-md">
						<span>Between</span>
						<Label htmlFor={`filter.${id}.response-time.start`} hidden />
						<Input
							id={`filter.${id}.response-time.start`}
							name={`filter.${id}.response-time.start`}
							placeholder="start"
							defaultValue={"30"}
						/>
						<span>and</span>
						<Label htmlFor={`filter.${id}.response-time.end`} hidden />
						<Input
							id={`filter.${id}.response-time.end`}
							name={`filter.${id}.response-time.end`}
							placeholder="end"
							defaultValue={"60"}
						/>
						<Select defaultValue="minutes" name={`filter.${id}.response-time.unit`}>
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
			<CardFooter>
				<Button
					onClick={() => removeFilter(id)}
					type="button"
					variant="destructive"
				>
					Delete Filter
				</Button>
			</CardFooter>
		</Card>
	);
}
