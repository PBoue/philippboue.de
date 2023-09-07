import { FC } from "react";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
	return (
		<footer className="bg-black border-t border-cyan">
			<div className="container max-w-7xl mx-auto py-10">
				<div className=" sm:flex sm:items-center sm:justify-between">
					<ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
						<li>
							<a
								href="/legal/terms"
								className="text-white transition hover:opacity-75"
							>
								Terms & Conditions
							</a>
						</li>
						<li>
							<a
								href="/legal/privacy"
								className="text-white transition hover:opacity-75"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="/legal/cookies"
								className="text-white transition hover:opacity-75"
							>
								Cookies
							</a>
						</li>
					</ul>

					<ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
						<li>
							<a
								href="https://www.linkedin.com/in/philippboue"
								rel="noreferrer"
								target="_blank"
								className="text-white transition hover:opacity-75"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									className="h-6 w-6"
									viewBox="0 0 21 21"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className="fill-white"
										d="M0.5 5.56385H4.92553V20.0012H0.5V5.56385ZM17.4787 6.45557C18.3582 6.93682 19.0816 7.66576 19.6489 8.64241C20.2163 9.61905 20.5 10.6169 20.5 11.636V20.0012H16.0319V11.636C16.0319 11.4096 15.9468 11.1548 15.7766 10.8717C15.6064 10.5886 15.4504 10.4046 15.3085 10.3197C15.0816 10.1781 14.7695 10.1074 14.3723 10.1074C13.9752 10.1074 13.6631 10.164 13.4362 10.2772L11.6064 11.1689V20.0012H7.1383V5.56385H11.6064V6.24326C12.4858 5.84694 13.4787 5.66293 14.5851 5.69124C15.6915 5.71955 16.656 5.97433 17.4787 6.45557ZM2.71277 0.0012207C3.33688 0.0012207 3.8617 0.213535 4.28723 0.638163C4.71277 1.06279 4.92553 1.5865 4.92553 2.20929C4.92553 2.83208 4.71277 3.36286 4.28723 3.80165C3.8617 4.24043 3.33688 4.45982 2.71277 4.45982C2.08865 4.45982 1.56383 4.24043 1.1383 3.80165C0.712766 3.36286 0.5 2.83208 0.5 2.20929C0.5 1.5865 0.712766 1.06279 1.1383 0.638163C1.56383 0.213535 2.08865 0.0012207 2.71277 0.0012207Z"
									/>
								</svg>
							</a>
						</li>

						<li>
							<a
								href="https://www.xing.com/profile/Philipp_Boue/cv"
								rel="noreferrer"
								target="_blank"
								className="text-white transition hover:opacity-75"
							>
								<span className="sr-only">Xing</span>
								<svg
									className="h-6 w-6"
									viewBox="0 0 21 21"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className="fill-white"
										d="M18.118 21.0012H13.4438L8.72472 12.842L15.7809 0.0012207H20.5L13.4438 12.842L18.118 21.0012ZM0.5 15.1605L4.00562 9.31969L1.66854 4.68275H6.38764L8.72472 9.31969L5.2191 15.1605H0.5Z"
									/>
								</svg>
							</a>
						</li>

						<li>
							<a
								href="https://www.instagram.com/philipp.boue"
								rel="noreferrer"
								target="_blank"
								className="text-white transition hover:opacity-75"
							>
								<span className="sr-only">Instagram</span>

								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										className="fill-white"
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</li>

						<li>
							<a
								href="https://github.com/PBoue"
								rel="noreferrer"
								target="_blank"
								className="text-white transition hover:opacity-75"
							>
								<span className="sr-only">GitHub</span>

								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										className="fill-white"
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
