import ComingSoon from "~/app/_components/errors/coming-soon";

export default async function Filters() {
	// TODO change text
	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Settings
						</h1>
						<p className="pt-4 text-muted-foreground">
							Manage your account settings.
						</p>
					</div>
					<ComingSoon />
				</div>
			</div>
		</div>
	);
}
