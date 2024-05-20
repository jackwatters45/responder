import type { BusinessPreview } from "types/business-preview";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";
import { Switch } from "~/app/_components/ui/switch";
import { cn } from "~/lib/utils";

export default function BusinessPreviewCard(
	props: BusinessPreview & { selected: boolean; isLastSingle: boolean | null },
) {
	return (
		<Card
			className={cn(
				"data-[selected=true]:border-2 data-[selected=true]:border-muted-foreground",
				{
					"col-span-2": props.isLastSingle,
				},
			)}
			data-selected={props.selected}
		>
			<CardHeader className="space-y-4">
				<CardTitle>{props.name}</CardTitle>
				<CardDescription className="space-y-4 text-muted-foreground">
					{props.type} in {props.address.city}, {props.address.state}
				</CardDescription>
			</CardHeader>
			<CardContent className=" flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="text-xl font-bold">{props.rating}</div>
					<div className="text-muted-foreground">({props.reviewCount} reviews)</div>
				</div>
				<Switch />
			</CardContent>
		</Card>
	);
}
