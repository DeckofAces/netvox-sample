import type { Route } from "../+types/root";
import { ForgotPassword } from "../forgot-password/forgot-password";

export function meta({}: Route.MetaArgs) {
	return [{ title: "NetVox" }];
}

export default function Home() {
	return <ForgotPassword />;
}
