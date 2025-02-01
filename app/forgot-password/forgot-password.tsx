import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function ForgotPassword() {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setEmail(value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(email);
		navigate("/forgot-password/enter-otp");
	};

	return (
		<main className="px-3 py-6 h-screen">
			<button className="rounded-full grid place-items-center size-8 bg-[#CACACA38] mb-2">
				<Link to="/signin">
					<ArrowLeft size={18} />
				</Link>
			</button>
			<section className="h-5/6">
				<header className="text-neutral-black mb-8">
					<h5 className="text-2xl font-bold">Forgot Password</h5>
					<h6>Kindly enter your registered email address here.</h6>
				</header>
				<form onSubmit={handleSubmit} className="h-11/12 flex flex-col justify-between">
					<div className="flex w-full flex-col gap-1.5 mb-5">
						<label htmlFor="email" className="text-sm font-medium text-neutral-black">
							Email address
						</label>
						<div className="bg-[#0000000D] rounded-[10px] px-6 py-4">
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={handleChange}
								placeholder="Enter your email address"
								className="font-medium outline-none w-5/6 text-sm text-neutral-black placeholder:font-medium placeholder:text-neutral-white placeholder:text-sm"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="bg-primary w-full py-3.5 text-white font-extrabold text-lg rounded-[10px] cursor-pointer hover:bg-primary/90 disabled:bg-neutral-white disabled:cursor-not-allowed"
						disabled={email.length < 1}>
						Continue
					</button>
				</form>
			</section>
		</main>
	);
}
