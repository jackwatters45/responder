"use server";

import { auth } from "@clerk/nextjs/server";
import debug from "debug";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "~/server/db";
import { accounts, locations } from "~/server/db/schema";

const log = debug("responder:onboarding:actions");

const onboardingSchema = z.object({
	businesses: z.array(z.string()),
	accountId: z.string(),
});

export async function createUserConfig(prevState: unknown, formData: FormData) {
	const user = auth().protect();

	const username = user.sessionClaims?.username;

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
			accountId: formData.get("accountId"),
		});

		// Return early if the form data is invalid
		if (!validatedFields.success) {
			log("errors", validatedFields.error.flatten().fieldErrors);
			return {
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		//
		//
		// TODO delete
		await db.insert(accounts).values({
			id: validatedFields.data.accountId,
			userId: user.userId,
		});
		//
		//
		//

		await db.insert(locations).values(
			validatedFields.data.businesses.map((id) => ({
				id,
				accountId: validatedFields.data.accountId,
			})),
		);

		return null;
	} catch (e) {
		console.error(e);
	} finally {
		redirect(`/${username ?? "dashboard"}`);
	}
}
