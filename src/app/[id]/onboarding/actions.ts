"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
	email: z.string({
		invalid_type_error: "Invalid Email",
	}),
});

export async function createConfig(prevState: unknown, formData: FormData) {
	auth().protect(); // TODO check if correct user?

	try {
		// validate using zod backend and justt use native html frontend
		const validatedFields = schema.safeParse({
			email: formData.get("email"),
		});

		// Return early if the form data is invalid
		if (!validatedFields.success) {
			return {
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		const rawFormData = Object.fromEntries(formData);

		// mutate data
		// revalidate cache

		return {
			message: "Please enter a valid email",
		};
	} catch (e) {
		console.error(e);
	}

	// TODO re-add these
	// revalidate nextjs cache for path
	// revalidatePath(`/${id}/onboarding`);
	// or jst for specific data
	// revalidateTag('posts')

	// redirect(`/${id}`);
}
