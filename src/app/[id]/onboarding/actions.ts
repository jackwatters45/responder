"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const filter = z.object({
	name: z.string({ invalid_type_error: "Invalid Filter" }),
});

export type Filter = z.infer<typeof filter>;

const defaultFilter: Filter = {
	name: "",
};

const onboardingSchema = z.object({
	businesses: z.array(
		z.string({
			invalid_type_error: "Invalid Business",
		}),
	),
	plan: z.enum(["free", "premium"], {
		invalid_type_error: "Invalid Plan",
	}),
	filters: z.array(filter),
});

type OnboardingSchema = z.infer<typeof onboardingSchema>;

export const defaultOnboardingSchema: OnboardingSchema = {
	plan: "free",
	businesses: [],
	filters: [],
};

export const initialState = {
	error: {
		businesses: "",
		plan: "",
		filters: "",
	},
};

export async function createConfig(prevState: unknown, formData: FormData) {
	auth().protect();

	const username = auth().sessionClaims?.username;

	try {
		// validate using zod backend and justt use native html frontend
		const validatedFields = onboardingSchema.safeParse({
			businesses: formData.getAll("businesses"),
			plan: formData.get("plan"),
			filters: formData.getAll("filters"),
		});

		// Return early if the form data is invalid
		if (!validatedFields.success) {
			return {
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		const rawFormData = Object.fromEntries(formData);

		// do something with the data
		console.log(rawFormData);

		// return the new state
		return {
			message: "Successfully updated",
		};
	} catch (e) {
		console.error(e);
	}

	redirect(`/${username ?? "dashboard"}`);
}
