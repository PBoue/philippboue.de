"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			"peer inline-flex h-[40px] w-[80px] shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
			// Use reusable recessed surface class
			"recessed-surface",
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				"pointer-events-none relative flex items-center justify-center h-[38px] w-[38px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[39px] data-[state=unchecked]:translate-x-0",
				// Use reusable glow class
				"glow-cyan",
			)}
		>
			{/* Center dot */}
			<span className="block w-2 h-2 rounded-full bg-[#1a3a38] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]" />
		</SwitchPrimitives.Thumb>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
