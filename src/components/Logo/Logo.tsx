"use client";

import { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
	const { scrollY } = useScroll();
	const rotate = useTransform(scrollY, [0, 1200], [0, 360], {
		clamp: false,
	});

	return (
		<div className="flex flex-row">
			<svg
				width="36"
				height="36"
				viewBox="0 0 196 196"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<text>PBO</text>
				<motion.path
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					style={{ rotate }}
					className="fill-black dark:fill-white"
					clipRule="evenodd"
					d="M98 196C135.681 196 168.395 174.734 184.794 143.549L167.052 134.308C153.99 159.099 127.969 176 98 176C79.6452 176 62.7712 169.66 49.4483 159.051L36.9125 174.636C53.665 188.007 74.8991 196 98 196ZM5.01758 129.04C1.7628 119.286 0 108.849 0 98C0 43.8761 43.8761 0 98 0C152.124 0 196 43.8761 196 98H176C176 54.9218 141.078 20 98 20C54.9218 20 20 54.9218 20 98C20 106.262 21.2846 114.224 23.665 121.698L5.01758 129.04Z"
				/>
				<motion.path
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					style={{ rotate }}
					fillRule="evenodd"
					className="fill-black dark:fill-white"
					clipRule="evenodd"
					d="M106.659 28.5981C103.662 28.2036 100.605 28 97.5 28C59.1162 28 28 59.1162 28 97.5C28 135.884 59.1162 167 97.5 167C135.884 167 167 135.884 167 97.5C167 75.5823 156.854 56.0342 141.003 43.2961L127.934 59.3527C139.539 68.3202 147 82.2975 147 98C147 125.062 124.838 147 97.5 147C70.1619 147 48 125.062 48 98C48 70.938 70.1619 49 97.5 49C99.631 49 101.731 49.1333 103.791 49.392L106.659 28.5981Z"
				/>
				<motion.circle
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					cx="98"
					cy="98"
					r="43"
					className="fill-black dark:fill-white"
				/>
			</svg>
			<motion.span
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-bold pl-5"
			>
				PBO
			</motion.span>
		</div>
	);
};
