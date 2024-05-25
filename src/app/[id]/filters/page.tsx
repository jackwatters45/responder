import { nanoid } from "nanoid";

import type { Filter } from "types";
import { getFilters, saveFilters } from "./actions";
import Filters from "./form";

export default async function Page() {
	const filters = await getFilters();
	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">Filters</h1>
						<p className="pt-4 text-muted-foreground">
							Configure your filters based on review rating
						</p>
					</div>
					<form action={saveFilters}>
						<Filters filters={filters} />
					</form>
				</div>
			</div>
		</div>
	);
}
