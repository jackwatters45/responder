"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "../ui/button";
import type { SidebarNavItem } from "./sidebar-nav";

interface SidebarNavItemProps {
	item: SidebarNavItem;
}

export function SidebarItem({ item }: SidebarNavItemProps) {
	const segment = usePathname().split("/")?.[2];

	return (
		<ButtonLink
			key={item.href}
			href={item.href}
			variant={"ghost"}
			className="group h-12 lg:h-10 lg:rounded-md rounded-none lg:w-full justify-start font-light data-[active=true]:border-b-2 border-foreground data-[active=true]:text-foreground text-muted-foreground lg:data-[active=true]:border-b-0 relative hover:bg-transparent lg:data-[active=true]:pb-2 data-[active=true]:pb-[6px] lg:pb-2 lg:data-[active=true]:bg-secondary lg:data-[active=true]:text-secondary-foreground lg:data-[active=true]:hover:bg-secondary/80 transition-all"
			data-active={segment === item.href.split("/")[2]}
		>
			<div
				className="group-hover:bg-border absolute inset-0 my-[5px] data-[active=false]:mt-[5px] data-[active=false]:mb-[7px] rounded-sm  group-hover:bg-opacity-100 lg:hidden transition-opacity"
				data-active={segment === item.href.split("/")[2]}
			/>
			<span className="z-10">{item.title}</span>
		</ButtonLink>
	);
}
