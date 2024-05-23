import { Button } from "~/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";

export default function ConnectGoogle() {
	return (
		<Card className="space-y-4 text-base">
			<CardHeader className="space-y-4">
				<CardTitle>Connect Google My Business</CardTitle>
				<CardDescription className="space-y-4 text-base">
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
				<Button size="lg" className="w-full">
					Connect Google My Business
				</Button>
			</CardContent>
			<CardFooter className="text-muted-foreground text-sm">
				You'll be redirected to Google to authorize the connection.
			</CardFooter>
		</Card>
	);
}
