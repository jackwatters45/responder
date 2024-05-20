import { Card, CardContent, CardHeader } from "~/app/_components/ui/card";
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
import { Switch } from "~/app/_components/ui/switch";
import { Textarea } from "~/app/_components/ui/textarea";

export default function ResponseSettingCard({ id }: { id: string }) {
	return (
		<Card>
			<CardHeader className="space-y-2">
				<Label htmlFor={`${id}-name`} className="text-xl">
					Name
				</Label>
				<Input id={`${id}-name`} placeholder="Positive Review" />
			</CardHeader>
			<CardContent className="space-y-8">
				<div className="space-y-2">
					<Label htmlFor={`${id}-filter`}>Filter</Label>
					<div className="flex items-center gap-2 border py-2 px-4 rounded-md">
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
					<div className="flex items-center gap-2 border py-2 px-4 rounded-md">
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
