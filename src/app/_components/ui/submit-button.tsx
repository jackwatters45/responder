"use client";

import { useFormStatus } from "react-dom";
import { Button } from "~/app/_components/ui/button";

interface SubmitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

// add some actual loading state -> might need to make less generic
export function SubmitButton({ children, ...props }: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" disabled={pending} {...props}>
			{children}
		</Button>
	);
}
