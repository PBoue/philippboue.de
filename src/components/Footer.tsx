import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export const Footer = async () => {
	const client = createClient();
	const settings = await client.getSingle("settings");
	const social = await client.getSingle("social");

	return (
		<footer className="bg-[#0a0c14] relative z-40">
			<div className="container max-w-400 mx-auto py-10 px-4">
				<div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
					<ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
						{settings.data.footer_links.map(({ link, label }, i) => (
							<li key={i}>
								<PrismicNextLink
									field={link}
									className="text-white/70 transition hover:text-white"
								>
									{label}
								</PrismicNextLink>
							</li>
						))}
					</ul>

					<p className="text-foreground"> © PBO {new Date().getFullYear()}</p>

					<ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
						{social.data.social_plattforms.map(
							({ label, link, svg_icon_path }, i) =>
								svg_icon_path ? (
									<li key={i}>
										<PrismicNextLink
											field={link}
											rel="noopener noreferrer"
											target="_blank"
											className="text-white/70 transition hover:text-white"
										>
											<span className="sr-only">{label}</span>
											<svg
												className="h-6 w-6"
												viewBox="0 0 21 21"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path className="fill-white/70" d={svg_icon_path} />
											</svg>
										</PrismicNextLink>
									</li>
								) : null,
						)}
					</ul>
				</div>
			</div>
		</footer>
	);
};
