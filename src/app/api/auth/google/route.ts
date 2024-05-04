// import { NextRequest } from "next/server";
import { env } from "~/env";
import { db } from "~/server/db";

import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2(
	env.GOOGLE_ID,
	env.GOOGLE_SECRET,
	`${env.NEXT_PUBLIC_BASE_URL}/api/auth/google/callback`,
);

export async function GET(req: Request) {
	const scopes = [
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email",
		"https://www.googleapis.com/auth/business.manage",

		// "https://www.googleapis.com/auth/gmail.send",
		// "https://mail.google.com/",
	];

	const authorizationUrl = oauth2Client.generateAuthUrl({
		access_type: "offline",
		scope: scopes,
		prompt: "consent",
		include_granted_scopes: true,
		redirect_uri: `${env.NEXT_PUBLIC_BASE_URL}/api/auth/google/callback`,
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: authorizationUrl,
		},
	});
}
