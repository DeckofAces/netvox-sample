import type { Route } from "../+types/root";
import { Signin } from "../signin/signin";

export function meta({}: Route.MetaArgs) {
	return [{ title: "NetVox" }];
}

export default function Home() {
	return <Signin />;
}
