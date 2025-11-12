"use client";
import VolleyballCourt from "./components/volleyball-court";
import PositionBox from "./components/position-box";
import { useRef, useState } from "react";
import PlayerContext from "./context/PlayerContext";
const player_positions = [
	{ number: 1, name: "Josh", position: 4 },
	{ number: 3, name: "Joe", position: 3 },
	{ number: 13, name: "Naz", position: 2 },
	{ number: 16, name: "Danny", position: 5 },
	{ number: 12, name: "David", position: 6 },
	{ number: 11, name: "Kye", position: 1 },
];
export default function Home() {
	const VOLLEYBALL_COURT_POSITIONS = [4, 3, 2, 5, 6, 1];
	const [selectedPlayers, setSelectedPlayers] = useState(player_positions);
	const [selectedPosition, setSelectedPosition] = useState(null);

	const [tempPlayer, setTempPlayer] = useState({
		name: "",
		number: "",
		position: null,
	});

	const dialogRef = useRef(null);

	const onChange = (e: React.FormEvent) => {
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
			const newPlayerArray = [...selectedPlayers];
			newPlayerArray[playerIndex] = tempPlayer;
			setSelectedPlayers(newPlayerArray);
			dialogRef.current.close();
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
					<button className="mt-20" onClick={() => rotateTeam()}>
						Rotate
					</button>
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
							className="px-3 py-1 border rounded-xl border-gray-400 hover:bg-gray-200 cursor-pointer transition-all duration"
							onClick={() => dialogRef.current.close()}
						>
							Close Modal
						</button>
						<button
							className="px-3 py-1 border rounded-xl border-slate-900 bg-slate-600 text-white hover:bg-slate-800 cursor-pointer transition-all duration-200"
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
