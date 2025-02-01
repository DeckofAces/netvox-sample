import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function SigninForm() {
	const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
	const [showPassword, setShowPassword] = useState(false);

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

	return (
		<form onSubmit={handleSubmit}>
			<header className="mb-3">
				<h6 className="font-bold text-neutral-black text-2xl">Sign In</h6>
			</header>
			<div className="mb-5">
				<div className="flex w-full flex-col gap-1.5 mb-5">
					<label htmlFor="email" className="text-sm font-medium text-neutral-black">
						Email address
					</label>
					<div className="bg-[#0000000D] rounded-[10px] px-6 py-4">
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email address"
							className="font-medium outline-none w-5/6 text-sm text-neutral-black placeholder:font-medium placeholder:text-neutral-white placeholder:text-sm"
						/>
					</div>
				</div>
				<div className="relative flex w-full flex-col gap-1.5 mb-1.5">
					<label htmlFor="password" className="text-sm font-medium text-neutral-black">
						Password
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
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-1">
						<input type="checkbox" name="remember" id="remember" className="size-3" />
						<label htmlFor="remember" className="text-[#CCCED0] font-medium text-xs">
							Remember me
						</label>
					</div>
					<Link to="/forgot-password" className="font-bold text-xs underline text-primary cursor-pointer">
						Forgot Password?
					</Link>
				</div>
			</div>
			<button type="submit" className="bg-primary w-full py-3.5 text-white font-extrabold text-lg rounded-[10px] cursor-pointer hover:bg-primary/90">
				Continue
			</button>
		</form>
	);
}
