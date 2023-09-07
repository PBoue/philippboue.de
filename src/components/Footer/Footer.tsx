import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export const Footer = async () => {
	const client = createClient();
	const settings = await client.getSingle("settings");
	const social = await client.getSingle("social");

	return (
		<footer className="bg-black border-t border-cyan">
			<div className="container max-w-7xl mx-auto py-10">
				<div className=" sm:flex sm:items-center sm:justify-between">
					<ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
						{settings.data.footer_links.map(({ link, label }, i) => (
							<li key={i}>
								<PrismicNextLink
									field={link}
									className="text-white transition hover:opacity-75"
								>
									{label}
								</PrismicNextLink>
							</li>
						))}
					</ul>

					<p className="text-white"> © PBO {new Date().getFullYear()}</p>

					<ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
						{social.data.social_plattforms.map(
							({ label, link, svg_icon_path }, i) => (
								<li key={i}>
									<PrismicNextLink
										field={link}
										rel="noreferrer"
										target="_blank"
										className="text-white transition hover:opacity-75"
									>
										<span className="sr-only">{label}</span>
										<svg
											className="h-6 w-6"
											viewBox="0 0 21 21"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path className="fill-white" d={svg_icon_path} />
										</svg>
									</PrismicNextLink>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</footer>
	);
};
