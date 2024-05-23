import { cn } from "~/lib/utils";
import { SidebarItem } from "./sidebar-item";

export interface SidebarNavItem {
	href: string;
	title: string;
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: Array<SidebarNavItem>;
}

export default async function Sidebar({
	className,
	items,
	...props
}: SidebarNavProps) {
	return (
		<div
			className={cn(
				"flex fixed w-full bg-background  lg:w-unset lg:relative lg:flex-col lg:pb-12 lg:pt-6 px-3 border-b lg:border-none lg:space-y-1",
				className,
			)}
			{...props}
		>
			{items.map((item) => (
				<SidebarItem key={item.href} item={item} />
			))}
		</div>
	);
}
