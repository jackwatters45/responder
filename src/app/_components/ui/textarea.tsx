"use client";

import RCTextarea from "rc-textarea";
import type { TextAreaProps, TextAreaRef } from "rc-textarea";
import * as React from "react";

import { cn } from "~/lib/utils";

const Textarea = React.forwardRef<TextAreaRef, TextAreaProps>(
	({ className, ...props }, ref) => {
		return (
			<RCTextarea
				className={cn(
					"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				autoSize={true}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
