"use client";

import { useFormState } from "react-dom";

import type { BusinessPreview } from "types";
import { createUserConfig } from "./actions";

import ChooseBusinesses from "../../_components/business-preview-card";
import { SubmitButton } from "../../_components/ui/submit-button";

// TODO
// Google part -> add the fake create there and persist the fake id created
// do dumb onboarding flow

// enforce select single or something figure out logic there
//  more than one selected business -> premium (modal or something)

// filter
// default negative and positive review filters
// form logic (rendering, values, conditional shit, etc)
// content will also defintely need to exist in the dashboard -> components

// layout is meh
// width or right thingy

interface OnboardingFormProps {
	businesses: BusinessPreview[];
	accountId: string;
}

export default function DashboardForm({
	businesses,
	accountId,
}: OnboardingFormProps) {
	const [error, formAction] = useFormState(createUserConfig, null);

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
					<form action={formAction} className="p-6 border rounded-lg shadow-md">
						<ChooseBusinesses businesses={businesses} />
						<input type="text" hidden value={accountId} name="accountId" />
						<div className="w-full flex items-center justify-between pt-6">
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
								{/* TODO rename */}
								Complete Onboarding
							</SubmitButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
