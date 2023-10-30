"use client";

import { useState } from "react";
import { Button } from "@/components";

export default function Contact() {
	const [agreed, setAgreed] = useState(false);

	return (
		<>
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue to-magenta opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl text-center">
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Looking forward to hearing from you.
				</p>
			</div>
			<form
				action="#"
				method="POST"
				className="mx-auto mt-16 max-w-xl sm:mt-20"
				data-netlify="true"
			>
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label
							htmlFor="first-name"
							className="block text-sm font-semibold leading-6 text-black"
						>
							First name
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="given-name"
								className="block w-full rounded-md border-0 p-5 text-black shadow-sm ring-1 ring-inset ring-black/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="last-name"
							className="block text-sm font-semibold leading-6 text-black"
						>
							Last name
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
								className="block w-full rounded-md border-0 p-5 text-black shadow-sm ring-1 ring-inset ring-black/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="company"
							className="block text-sm font-semibold leading-6 text-black"
						>
							Company
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="company"
								id="company"
								autoComplete="organization"
								className="block w-full rounded-md border-0 p-5 text-black shadow-sm ring-1 ring-inset ring-black/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-black"
						>
							Email
						</label>
						<div className="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
								className="block w-full rounded-md border-0 p-5 text-black shadow-sm ring-1 ring-inset ring-black/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="phone-number"
							className="block text-sm font-semibold leading-6 text-black"
						>
							Phone number
						</label>
						<input
							type="tel"
							name="phone-number"
							id="phone-number"
							autoComplete="tel"
							className="block w-full rounded-md border-0 p-5 text-black shadow-sm ring-1 ring-inset ring-black/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm font-semibold leading-6 text-black"
						>
							Message
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className="block w-full rounded-md border-0 p-5 text-black shadow-sm ring-1 ring-inset ring-black/50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan sm:text-sm sm:leading-6"
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<Button type="submit">Let us talk</Button>
				</div>
			</form>
		</>
	);
}
