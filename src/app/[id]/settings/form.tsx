"use client";

import { useFormState } from "react-dom";

import type { BusinessPreview } from "types/business-preview";
import { editActiveBusinesses } from "./actions";

import { SubmitButton } from "~/app/_components/ui/submit-button";
import ChooseBusinesses from "../../_components/business-preview-card";

interface BusinessesFormProps {
	businesses: BusinessPreview[];
}

export default function BusinessesForm({ businesses }: BusinessesFormProps) {
	const [error, formAction] = useFormState(editActiveBusinesses, null);

	return (
		<form action={formAction} className="p-6 border rounded-lg shadow-md">
			<ChooseBusinesses businesses={businesses} />
			<div className="w-full flex items-center justify-between pt-6">
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
