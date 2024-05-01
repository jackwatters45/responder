export default function PhotoModal({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
			<a href={`${id + 1}`}> Next </a>
		</div>
	);
}
