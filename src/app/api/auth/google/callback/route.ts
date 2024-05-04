import debug from "debug";
import { google } from "googleapis";
import type { NextRequest } from "next/server";
import { oauth2Client } from "../route";

const log = debug("responder:app:api:auth:google:callback");

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get("code");

	if (!code) {
		return new Response("No code provided", { status: 400 });
	}

	const { tokens } = await oauth2Client.getToken(code);

	oauth2Client.setCredentials(tokens);

	const myBusiness = google.mybusinessaccountmanagement({
		version: "v1",
		auth: oauth2Client,
		headers: { Authorization: `Bearer ${tokens.access_token}` },
	});

	const b = await myBusiness.accounts.list();
	log(myBusiness);

	// 	const response = await fetch("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", {
	// 		headers: { Authorization: `Bearer ${tokens.access_token}` },
	// 	});

	// const data = await response.json();

	// log(data);

	// const response2 = await fetch(
	// 	"https://www.googleapis.com/oauth2/v2/userinfo",
	// 	{
	// 		headers: { Authorization: `Bearer ${tokens.access_token}` },
	// 	},
	// );

	// log(response2)
	return new Response(null, {
		status: 302,
		headers: {
			Location: "/",
		},
	});

	// console.log(accessToken);

	//   console.log(response);
	//   // Now that we have the code, use it to acquire tokens.
	//   const { tokens } = await client.getToken(code as string);
	//   // Save these tokens for future use.
	//   res.send('Authentication successful! You can close this window.');

	// const accessToken = req.url;

	// if (!response.ok) {
	// 	throw new Error("Failed to fetch user information");
	// }

	// const data = (await response.json()) as { email: string };

	// const config = db.query.config.create({
	// 	data: {
	// 		key: "google",
	// 		value: JSON.stringify({ email: data.email }),
	// 	},
	// });

	// return config;
}

async function createReply() {
	// PUT;
	//mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews/{reviewId}/reply
	// https: {
	// comment: "Thank you for visiting our business!";
	// }
}
