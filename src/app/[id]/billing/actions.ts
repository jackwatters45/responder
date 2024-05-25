"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import debug from "debug";
import { z } from "zod";

import type { Plan } from "types";

const log = debug("responder:settings:businesses:actions");

const planSchema = z.object({
	plan: z.string(),
});

export async function selectPlan(plan: Plan) {
	const { userId } = auth().protect();

	try {
		const { data } = planSchema.safeParse({ plan });

		const updated = await clerkClient.users.updateUserMetadata(userId, {
			publicMetadata: {
				plan: data?.plan,
			},
		});

		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}
