import googleIcon from "/google-icon.png";
import appleIcon from "/apple-icon.png";

export default function ContinueWithOtherAccounts() {
	return (
		<>
			<div className="flex items-center justify-center my-3">
				<div className="flex-grow border-t border-[#0000001A]"></div>
				<span className="px-2 text-[#18181B33] font-medium">or</span>
				<div className="flex-grow border-t border-[#0000001A]"></div>
			</div>
			<div role="button" className="flex items-center justify-center px-6 py-4 rounded-[10px] border border-[#0000001A] mb-3 cursor-pointer hover:bg-grey/5">
				<img src={googleIcon} alt="Google" className="size-6 mr-auto" />
				<p className="text-neutral-black text-sm font-bold mr-auto">Continue with Google</p>
			</div>
			<div role="button" className="flex items-center justify-center px-6 py-4 rounded-[10px] border border-[#0000001A] cursor-pointer hover:bg-grey/5">
				<img src={appleIcon} alt="Google" className="size-6 mr-auto" />
				<p className="text-neutral-black text-sm font-bold mr-auto">Continue with Apple</p>
			</div>
		</>
	);
}
