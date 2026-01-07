"use client";

import { useEffect, useState, type FC } from "react";

export interface InlineSVGProps {
	url: string | null | undefined;
	className?: string;
}

export const InlineSVG: FC<InlineSVGProps> = ({ url, className }) => {
	const [svgContent, setSvgContent] = useState<string | null>(null);

	useEffect(() => {
		if (!url) return;

		const fetchSVG = async () => {
			try {
				const response = await fetch(url);
				const text = await response.text();

				// Parse the SVG and modify it to use currentColor
				const parser = new DOMParser();
				const doc = parser.parseFromString(text, "image/svg+xml");
				const svg = doc.querySelector("svg");

				if (svg) {
					// Remove fixed width/height to allow CSS control
					svg.removeAttribute("width");
					svg.removeAttribute("height");

					// Add class for styling
					if (className) {
						svg.setAttribute("class", className);
					}

					// Replace fill and stroke colors with currentColor
					const elements = svg.querySelectorAll("*");
					elements.forEach((el) => {
						const fill = el.getAttribute("fill");
						const stroke = el.getAttribute("stroke");

						// Replace non-none fills with currentColor
						if (fill && fill !== "none" && fill !== "transparent") {
							el.setAttribute("fill", "currentColor");
						}

						// Replace non-none strokes with currentColor
						if (stroke && stroke !== "none" && stroke !== "transparent") {
							el.setAttribute("stroke", "currentColor");
						}
					});

					setSvgContent(svg.outerHTML);
				}
			} catch (error) {
				console.error("Failed to fetch SVG:", error);
			}
		};

		fetchSVG();
	}, [url, className]);

	if (!svgContent) {
		return null;
	}

	return <span dangerouslySetInnerHTML={{ __html: svgContent }} />;
};
