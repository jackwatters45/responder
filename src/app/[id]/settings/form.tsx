"use client";

import { useFormState } from "react-dom";

import type { BusinessPreview } from "types/business-preview";
import { editActiveBusinesses } from "./actions";

import { SubmitButton } from "~/app/_components/ui/submit-button";
import ChooseBusinesses from "../../_components/business-preview-card";

interface BusinessesFormProps {
	businesses: BusinessPreview[];
}

export default async function BusinessesFormProps({
	businesses,
}: BusinessesFormProps) {
	const [error, formAction] = useFormState(editActiveBusinesses, null);

	return (
		<form action={formAction} className="space-y-8">
			<ChooseBusinesses businesses={businesses} />
			<div className="w-full flex items-center justify-between">
				<div className="flex-1">
					{error && (
						<ul aria-live="polite" className="text-destructive">
							{error.errors.businesses?.map((e) => (
								<li key={e}>{e}</li>
							))}
						</ul>
					)}
				</div>
				<SubmitButton>Save</SubmitButton>
			</div>
		</form>
	);
}
