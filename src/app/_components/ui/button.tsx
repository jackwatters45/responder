"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import type { LinkProps } from "next/link";
import * as React from "react";

import { cn } from "~/lib/utils";
import { Label } from "./label";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				muted: "bg-muted-foreground text-muted hover:bg-muted-foreground/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export interface ButtonLinkProps
	extends LinkProps,
		VariantProps<typeof buttonVariants> {
	className?: string;
	children?: React.ReactNode;
	asChild?: boolean;
	onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
	onTouchEnd?: React.TouchEventHandler<HTMLAnchorElement>;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : Link;
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
ButtonLink.displayName = "ButtonLink";

export interface ButtonLabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement>,
		VariantProps<typeof buttonVariants> {}

const ButtonLabel = React.forwardRef<HTMLLabelElement, ButtonLabelProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<Label
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
ButtonLabel.displayName = "ButtonLabel";

export { Button, ButtonLink, ButtonLabel, buttonVariants };
