"use server";

import { auth } from "@clerk/nextjs/server";
import debug from "debug";
import { z } from "zod";
import { db } from "~/server/db";
import { locations } from "~/server/db/schema";

const log = debug("responder:settings:businesses:actions");

const onboardingSchema = z.object({
	businesses: z.array(z.string()),
});

export async function editActiveBusinesses(
	prevState: unknown,
	formData: FormData,
) {
	auth().protect();

	try {
		const businesses: string[] = [];
		for (const [key] of formData.entries()) {
			// group businesses
			if (/^business\./.test(key)) {
				const businessId = key.split(".")[1];
				if (!businessId) throw Error("business must have an id");
				businesses.push(businessId);
			}
		}

		// validate using zod backend and justt use native html frontend
		const validatedFields = onboardingSchema.safeParse({
			businesses: businesses,
		});

		// Return early if the form data is invalid
		if (!validatedFields.success) {
			log("errors", validatedFields.error.flatten().fieldErrors);
			return {
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		// TODO figure out how do this once redo structure of locations
		// await db.update(locations).set()
		// https://orm.drizzle.team/docs/update

		return null;
	} catch (e) {
		console.error(e);
	}
}
