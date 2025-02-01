import { Link } from "react-router";
import "./splash.css";

export function Splash() {
	return (
		<>
			<main className="w-screen h-screen flex items-center flex-col justify-between">
				<div className="splash-container"></div>
				<div className="text-center py-10 px-8">
					<h6 className="font-bold text-[2.5rem] leading-12 mb-4">Welcome to NetVox</h6>
					<p className="text-sm mb-12">Your all-in-one communication platform for personal and professional connections.</p>
					<Link to="/signin">
						<button className="bg-primary cursor-pointer rounded-[10px] py-3.5 w-full text-white">Get Started</button>
					</Link>
				</div>
			</main>
		</>
	);
}
