"use client";
import VolleyballCourt from "./components/volleyball-court";
import PositionBox from "./components/position-box";
import { useRef, useState } from "react";
const player_positions = [
	{ number: 1, name: "Josh", position: 4 },
	{ number: 3, name: "Josh", position: 3 },
	{ number: 13, name: "Josh", position: 2 },
	{ number: 16, name: "Josh", position: 5 },
	{ number: 12, name: "Josh", position: 6 },
	{ number: 11, name: "Josh", position: 1 },
];
export default function Home() {
	const positions = [4, 3, 2, 5, 6, 1];

	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

	const dialogRef = useRef(null);

	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
			<h1>Rotation Tracker</h1>

			<VolleyballCourt>
				<div className="size-full grid grid-cols-3 grid-rows-2 md:gap-5 gap-2 p-5">
					{positions.map((position, index) => {
						console.log(position);
						return (
							<PositionBox
								position={position}
								key={position}
								player={player_positions[index]}
								dialogRef={dialogRef}
							/>
						);
					})}
				</div>
			</VolleyballCourt>
			<dialog
				ref={dialogRef}
				className="max-w-md w-full m-auto rounded-md p-8 grid gap-10"
			>
				<div className="">Enter your player information</div>
				<div className="flex gap-5">
					<div className="flex flex-col">
						<label className="text-center">#</label>
						<input type="text" className="w-10 border px-2 py-1" />
					</div>
					<div className="flex flex-col flex-1">
						<label className="">Name</label>
						<input type="text" className="w-full border px-2 py-1" />
					</div>
				</div>
				<div className="flex flex-row justify-end gap-5">
					<button onClick={() => dialogRef.current.close()}>Close Modal</button>
					<button onClick={() => dialogRef.current.close()}>Save </button>
				</div>
			</dialog>
		</div>
	);
}
