"use client";

import { useFormState } from "react-dom";

import type { BusinessPreview } from "types/business-preview";
import { createUserConfig } from "./actions";

import { SubmitButton } from "../../_components/ui/submit-button";
import ChooseBusinesses from "./components/business-preview-card";

// TODO
// Google part -> add the fake create there and persist the fake id created

// enforce select single or something figure out logic there
//  more than one selected business -> premium (modal or something)

// filter
// default negative and positive review filters
// form logic (rendering, values, conditional shit, etc)
// content will also defintely need to exist in the dashboard -> components

interface OnboardingFormProps {
	businesses: BusinessPreview[];
	accountId: string;
}

export default function DashboardForm({
	businesses,
	accountId,
}: OnboardingFormProps) {
	const [error, formAction, isPending] = useFormState(createUserConfig, null);

	const errors = error?.errors;

	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="mx-auto max-w-3xl pt-12 pb-24">
				<div className="space-y-8">
					<div>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">
							Welcome to Responder
						</h1>
						<p className="pt-4 text-muted-foreground">
							Let's get you set up to start managing your reviews.
						</p>
					</div>
					<form action={formAction} className="space-y-8">
						<input type="text" hidden value={accountId} name="accountId" />
						<ChooseBusinesses businesses={businesses} />
						<div className="w-full flex items-center justify-between">
							<div className="flex-1">
								{errors?.businesses ||
									(errors?.accountId && (
										<ul aria-live="polite" className="text-destructive">
											{(errors?.businesses ?? [])
												.concat(errors?.accountId ?? [])
												.map((e) => (
													<li key={e}>{e}</li>
												))}
										</ul>
									))}
							</div>
							<SubmitButton>
								<div>Complete Onboarding</div>
							</SubmitButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
