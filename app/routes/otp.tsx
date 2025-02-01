import type { Route } from "../+types/root";
import { EnterCode } from "../enter-code/enter-code";

export function meta({}: Route.MetaArgs) {
	return [{ title: "NetVox" }];
}

export default function Home() {
	return <EnterCode />;
}
