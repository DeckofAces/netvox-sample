import { ArrowLeft } from "lucide-react";
import logo from "/logo.png";
import SigninForm from "./components/signin-form";
import ContinueWithOtherAccounts from "./components/continue-with-other-accounts";
import { Link } from "react-router";

export function Signin() {
	return (
		<>
			<main className="px-3 py-6">
				<button className="rounded-full grid place-items-center size-8 bg-[#CACACA38] mb-2">
					<Link to="/">
						<ArrowLeft size={18} />
					</Link>
				</button>
				<div className="mx-auto text-center space-y-1 mb-4">
					<img src={logo} alt="logo" className="size-20 mx-auto" />
					<h1 className="text-grey font-extrabold text-4xl">Netvox</h1>
				</div>
				<section className="px-3">
					<SigninForm />
				</section>
				<div>
					<ContinueWithOtherAccounts />
				</div>
				<div>
					<p className="text-xs text-neutral-white text-center mt-3">
						Don't have an account yet? <a className="text-primary underline font-bold cursor-pointer">Sign Up</a>
					</p>
				</div>
			</main>
		</>
	);
}
