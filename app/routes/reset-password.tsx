import type { Route } from "../+types/root";
import { ResetPassword } from "../reset-password/reset-password";

export function meta({}: Route.MetaArgs) {
	return [{ title: "NetVox" }];
}

export default function Home() {
	return <ResetPassword />;
}
