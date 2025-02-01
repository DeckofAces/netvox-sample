import type { Route } from "../+types/root";
import { Splash } from "../splash/splash";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "NetVox" },
		{
			name: "description",
			content: "Your all-in-one communication platform for personal and professional connections.",
		},
	];
}

export default function Home() {
	return <Splash />;
}
