"use client";

import { useEffect } from "react";
import { Container, Heading, Paragraph } from "@/components";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<Container className="min-h-[60vh] flex items-center justify-center">
			<div className="text-center">
				<Heading as="h1" variant="lg" className="mb-4">
					Something went wrong
				</Heading>
				<Paragraph className="mb-6">
					An unexpected error occurred. Please try again.
				</Paragraph>
				<button
					onClick={reset}
					className="btn-glow btn-glow-cyan px-6 py-3 rounded-full font-semibold"
				>
					Try again
				</button>
			</div>
		</Container>
	);
}
