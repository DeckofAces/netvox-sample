import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function ResetPassword() {
	const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);
	};

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword((prev) => !prev);
	};

	return (
		<main className="px-3 py-6 h-screen">
			<button className="rounded-full grid place-items-center size-8 bg-[#CACACA38] mb-2">
				<ArrowLeft size={18} />
			</button>
			<section className="h-5/6">
				<header className="text-neutral-black mb-8">
					<h5 className="text-2xl font-bold">Reset Password</h5>
					<h6>Kindly enter new password to secure your account.</h6>
				</header>
				<form onSubmit={handleSubmit} className="h-10/12 flex flex-col justify-between">
					<div className="mb-5">
						<div className="relative flex w-full flex-col gap-1.5 mb-5">
							<label htmlFor="password" className="text-sm font-medium text-neutral-black">
								Enter new Password
							</label>
							<div className="bg-[#0000000D] rounded-[10px] px-6 py-4">
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									id="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="Enter your password"
									className="font-medium outline-none w-5/6 text-sm text-neutral-black placeholder:font-medium placeholder:text-neutral-white placeholder:text-sm"
								/>
								<div className="absolute right-4 top-[2.85rem] cursor-pointer" onClick={togglePasswordVisibility}>
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</div>
							</div>
						</div>
						<div className="relative flex w-full flex-col gap-1.5 mb-1.5">
							<label htmlFor="confirmPassword" className="text-sm font-medium text-neutral-black">
								Reenter Password
							</label>
							<div className="bg-[#0000000D] rounded-[10px] px-6 py-4">
								<input
									type={showConfirmPassword ? "text" : "password"}
									name="confirmPassword"
									id="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleChange}
									placeholder="Enter your password"
									className="font-medium outline-none w-5/6 text-sm text-neutral-black placeholder:font-medium placeholder:text-neutral-white placeholder:text-sm"
								/>
								<div className="absolute right-4 top-[2.85rem] cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
									{showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</div>
							</div>
						</div>
					</div>
					<button type="submit" className="bg-primary w-full py-3.5 text-white font-extrabold text-lg rounded-[10px] cursor-pointer hover:bg-primary/90">
						Continue
					</button>
				</form>
			</section>
		</main>
	);
}
