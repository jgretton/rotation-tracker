"use client";
import VolleyballCourt from "./components/volleyball-court";
import PositionBox from "./components/position-box";
import { useRef, useState } from "react";
import PlayerContext from "./context/PlayerContext";
import { Player } from "./types";
const player_positions: Player[] = [
	{ number: "1", name: "Josh", position: 4 },
	{ number: "3", name: "Joe", position: 3 },
	{ number: "13", name: "Naz", position: 2 },
	{ number: "16", name: "Danny", position: 5 },
	{ number: "12", name: "David", position: 6 },
	{ number: "11", name: "Kye", position: 1 },
];
export default function Home() {
	const VOLLEYBALL_COURT_POSITIONS: number[] = [4, 3, 2, 5, 6, 1];
	const [selectedPlayers, setSelectedPlayers] =
		useState<Player[]>(player_positions);
	const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

	const [tempPlayer, setTempPlayer] = useState<Player>({
		name: "",
		number: "",
		position: 0,
	});

	const dialogRef = useRef<HTMLDialogElement>(null);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempPlayer((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSave = () => {
		if (tempPlayer.number === "" || tempPlayer.name === "") return;
		else {
			const playerIndex = selectedPlayers.findIndex(
				(a) => a.position === selectedPosition
			);
			if (playerIndex === -1) return;
			const newPlayerArray: Player[] = [...selectedPlayers];
			newPlayerArray[playerIndex] = tempPlayer;
			setSelectedPlayers(newPlayerArray);
			dialogRef?.current?.close();
		}
	};

	const rotateTeam = () => {
		const tempArray = selectedPlayers
			.map((player) => {
				const newPosition = player.position === 1 ? 6 : player.position - 1;
				return { ...player, position: newPosition };
			})
			.sort(
				(a, b) =>
					VOLLEYBALL_COURT_POSITIONS.indexOf(a.position) -
					VOLLEYBALL_COURT_POSITIONS.indexOf(b.position)
			);

		setSelectedPlayers(tempArray);
	};
	return (
		<PlayerContext.Provider
			value={{
				selectedPlayers,
				setSelectedPlayers,
				selectedPosition,
				setSelectedPosition,
				setTempPlayer,
			}}
		>
			<div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
				<h1>Rotation Tracker</h1>

				<VolleyballCourt>
					<div className="size-full grid grid-cols-3 grid-rows-2 md:gap-5 gap-2 p-5">
						{VOLLEYBALL_COURT_POSITIONS.map((position, index) => {
							return (
								<PositionBox
									position={position}
									key={position}
									player={selectedPlayers[index]}
									dialogRef={dialogRef}
								/>
							);
						})}
					</div>
					<div className="mt-20 grid gap-5">
						<button
							className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							onClick={() => rotateTeam()}
						>
							Rotate
						</button>
						<button
							className="rounded-md bg-red-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							onClick={() => setSelectedPlayers(player_positions)}
						>
							Reset
						</button>
					</div>
				</VolleyballCourt>
				<dialog
					ref={dialogRef}
					className="max-w-md w-full m-auto rounded-md p-8 grid gap-10 backdrop:bg-black/40"
				>
					<div className="">
						Enter your player information. Position {selectedPosition}
					</div>
					<div className="flex gap-5">
						<div className="flex flex-col">
							<label className="text-center">#</label>
							<input
								onChange={(e) => onChange(e)}
								value={tempPlayer.number}
								type="text"
								name="number"
								className="w-10 border px-2 py-1"
							/>
						</div>
						<div className="flex flex-col flex-1">
							<label className="">Name</label>
							<input
								onChange={(e) => onChange(e)}
								value={tempPlayer.name}
								type="text"
								name="name"
								className="w-full border px-2 py-1"
							/>
						</div>
					</div>
					<div className="flex flex-row justify-end gap-5">
						<button
							className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							onClick={() => dialogRef?.current?.close()}
						>
							Close Modal
						</button>
						<button
							className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
							type="button"
							onClick={() => onSave()}
						>
							Save{" "}
						</button>
					</div>
				</dialog>
			</div>
		</PlayerContext.Provider>
	);
}
