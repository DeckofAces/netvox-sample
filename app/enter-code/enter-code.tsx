import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import OtpInput from "./components/otp-input";
import { useNavigate } from "react-router";

export function EnterCode() {
	let navigate = useNavigate();

	const [otp, setOtp] = useState<string>("");
	const [timeLeft, setTimeLeft] = useState<number>(30);

	const handleOtpChange = (newOtp: string): void => {
		setOtp(newOtp);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		navigate("/forgot-password/new-password");
	};

	useEffect(() => {
		if (timeLeft <= 0) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	return (
		<main className="px-3 py-6 h-screen">
			<button className="rounded-full grid place-items-center size-8 bg-[#CACACA38] mb-2">
				<ArrowLeft size={18} />
			</button>
			<section className="h-5/6">
				<header className="text-neutral-black mb-8">
					<h5 className="text-2xl font-bold">Enter code</h5>
					<h6>A six digit code has been sent to your registered email.</h6>
				</header>
				<form onSubmit={handleSubmit} className="h-10/12 flex flex-col justify-between">
					<OtpInput onOtpChange={handleOtpChange} />
					<button
						type="submit"
						className="bg-primary w-full py-3.5 text-white font-extrabold text-lg rounded-[10px] cursor-pointer hover:bg-primary/90 disabled:bg-neutral-white disabled:cursor-not-allowed"
						disabled={otp.length < 6}>
						Continue
					</button>
				</form>
				{timeLeft > 0 ? (
					<p className="text-lg text-neutral-white mt-4 w-fit mx-auto">
						Resend in <span className="font-extrabold">00:{timeLeft}secs</span>
					</p>
				) : (
					<button className="underline text-lg mt-4 w-full text-neutral-black font-extrabold text-center">Resend code</button>
				)}
			</section>
		</main>
	);
}
