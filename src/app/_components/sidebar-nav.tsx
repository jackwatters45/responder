"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { ButtonLink } from "../_components/ui/button";

export interface SidebarNavItem {
	href: string;
	title: string;
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: Array<SidebarNavItem>;
}

export default function Sidebar({
	className,
	items,
	...props
}: SidebarNavProps) {
	return (
		<div
			className={cn(
				"flex lg:flex-col lg:pb-12 lg:pt-6 px-3 border-b lg:border-none lg:space-y-1",
				className,
			)}
			{...props}
		>
			{items.map((item) => (
				<SidebarItem key={item.href} {...item} />
			))}
		</div>
	);
}

function SidebarItem(item: SidebarNavItem) {
	const segment = usePathname().split("/")?.[2];

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ButtonLink
			key={item.href}
			href={item.href}
			variant={"ghost"}
			className="h-12 lg:h-10 lg:rounded-md rounded-none lg:w-full justify-start font-light data-[active=true]:border-b-2 border-foreground data-[active=true]:text-foreground text-muted-foreground lg:data-[active=true]:border-b-0 relative hover:bg-transparent lg:data-[active=true]:pb-2 data-[active=true]:pb-[6px] lg:pb-2 lg:data-[active=true]:bg-secondary lg:data-[active=true]:text-secondary-foreground lg:data-[active=true]:hover:bg-secondary/80 transition-all"
			data-active={segment === item.href.split("/")[2]}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onTouchStart={() => setIsHovered(true)}
			onTouchEnd={() => setIsHovered(false)}
		>
			<div
				className="absolute inset-0 my-[5px] data-[hovered=true]:bg-border data-[active=false]:mt-[5px] data-[active=false]:mb-[7px] rounded-sm data-[hovered=false]:bg-opacity-0 data-[hovered=true]:bg-opacity-100 lg:hidden transition-opacity"
				data-hovered={isHovered}
				data-active={segment === item.href.split("/")[2]}
			/>
			<span className="z-10">{item.title}</span>
		</ButtonLink>
	);
}
