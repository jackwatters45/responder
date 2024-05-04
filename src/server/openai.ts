import OpenAI from "openai";
import { env } from "~/env";

const openai = new OpenAI({
	apiKey: env.OPENAI_API_KEY,
	organization: env.OPENAI_ORGANIZATION_ID,
	project: env.OPENAI_PROJECT_ID,
});

// TODO - add background info.
export async function test({ prompt }: { prompt: string }) {
	const completion = await openai.chat.completions.create({
		messages: [{ role: "system", content: prompt }],
		model: "gpt-3.5-turbo",
	});

	console.log(completion.choices[0]?.message?.content);
}

const prompt = `Situation: You are a customers service representative at insurance BCX. You've encountered a glowing review praising the company's product and customer service.

Review Text: {{238103773__comment}}
Reviewer Name: {{238103773__reviewer__displayName}}

Instructions:
1. Express your gratitude for the positive feedback. Show the customer that you appreciate them taking the time to share their experience.
2. Acknowledge the specific aspects they enjoyed. 
3. Reinforce the positive aspects of the business. 
4. Maintain a friendly and appreciative tone throughout the response.
    
Additional Tips:
- Personalize the response, if possible. Mention the customer's name or reference specific details from their review.
- Keep the response concise and genuine.
- Use this opportunity to build customer loyalty and encourage repeat business.
- Sign off as We appreciate you \n Team Insurance BCX.`;
