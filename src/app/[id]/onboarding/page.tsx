import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import DashboardForm from "./form";

export default function Dashboard({
	params: { id },
}: {
	params: { id: string };
}) {
	const isOnboarded = auth()?.sessionClaims?.publicMetaData?.isOnboarded;

	if (isOnboarded) return redirect(`/${id}`);

	return <DashboardForm />;
}
