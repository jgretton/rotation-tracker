"use client";

import { RefObject, useContext } from "react";
import PlayerContext from "../context/PlayerContext";

interface PositionBoxProps {
	position: number;
	dialogRef: RefObject<HTMLDivElement>;
	player: {
		name: string;
		number: string;
		position: number;
	};
}

export default function PositionBox({
	position,
	player,
	dialogRef,
}: PositionBoxProps) {
	const { setSelectedPosition, setTempPlayer, selectedPlayers } =
		useContext(PlayerContext);
	const openDialog = () => {
		setTempPlayer(selectedPlayers.find((a) => a.position === position));
		dialogRef.current.showModal();
	};
	return (
		<button
			onClick={() => {
				openDialog();
				setSelectedPosition(position);
			}}
			className="cursor-pointer  size-full  grid grid-rows-[auto_1fr] z-50 transition-all bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 duration-200"
		>
			<div className="w-full text-center m-auto mt-10">
				<p className="text-4xl text-[#fd6d26] ">{position}</p>
			</div>
			<div className="text-center m-auto flex gap-2 flex-col flex-1 size-full justify-center items-center -mt-5">
				<p className="text-3xl text-slate-800 font-bold inline-flex items-center">
					#{player?.number}
				</p>
				<p className="text-sm font-medium text-slate-600 text-center leading-tight">
					{player?.name}
				</p>
			</div>
		</button>
	);
}
