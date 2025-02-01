import React, { useState, useRef, type ChangeEvent, type KeyboardEvent, type ClipboardEvent } from "react";

interface OtpInputProps {
	onOtpChange: (otp: string) => void;
}

export default function OtpInput({ onOtpChange }: OtpInputProps) {
	const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleChange = (value: string, index: number): void => {
		if (!isNaN(Number(value)) && value.length === 1) {
			const newOtp = [...otp];
			newOtp[index] = value;
			setOtp(newOtp);
			onOtpChange(newOtp.join(""));

			// Focus the next input
			if (value && index < 5) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	const handleBackspace = (index: number): void => {
		// if (otp[index] === "" && index > 0) {
		if (index > 0) {
			inputRefs.current[index - 1]?.focus();
			const newOtp = [...otp];
			newOtp[index] = "";
			setOtp(newOtp);
			onOtpChange(newOtp.join(""));
		} else if (otp[index] !== "") {
			const newOtp = [...otp];
			newOtp[index] = "";
			setOtp(newOtp);
			onOtpChange(newOtp.join(""));
		}
	};

	const handlePaste = (e: ClipboardEvent<HTMLDivElement>): void => {
		e.preventDefault();
		const data = e.clipboardData.getData("text").slice(0, 6).split("");
		const newOtp = data.concat(new Array(6 - data.length).fill(""));
		setOtp(newOtp);
		onOtpChange(newOtp.join(""));
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen px-4">
			<div className="mb-6 w-full bg-[#FAFAFA] pt-3 pb-8" onPaste={handlePaste}>
				<div className="flex gap-1.5 mx-auto w-fit">
					{otp.map((digit, index) => (
						<input
							key={index}
							type="text"
							maxLength={1}
							value={digit}
							onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, index)}
							onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
								if (e.key === "Backspace") {
									handleBackspace(index);
								}
							}}
							ref={(el: any) => (inputRefs.current[index] = el)}
							className="w-5 h-12 border-b-2 text-center text-xl focus:outline-none "
						/>
					))}
				</div>
			</div>
		</div>
	);
}
