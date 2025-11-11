import Image from "next/image";
import VolleyballCourt from "./components/volleyball-court";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
			<h1>Rotation Tracker</h1>
			<VolleyballCourt>
				<div className="size-full grid grid-cols-3 grid-rows-2 md:gap-5 gap-2 p-5">
					<div className="size-full border border-white bg-white/20"></div>
					<div className="size-full border border-white bg-white/20"></div>
					<div className="size-full border border-white bg-white/20"></div>
					<div className="size-full border border-white bg-white/20"></div>
					<div className="size-full border border-white bg-white/20"></div>
					<div className="size-full border border-white  bg-white/20"></div>
				</div>
			</VolleyballCourt>
		</div>
	);
}
