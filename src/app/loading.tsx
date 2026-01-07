import { Container } from "@/components";

export default function Loading() {
	return (
		<Container className="min-h-[60vh] flex items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan border-t-transparent" />
				<span className="text-muted-foreground">Loading...</span>
			</div>
		</Container>
	);
}
