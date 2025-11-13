"use client";
import { PositionBoxProps } from "../app/types";
import { usePlayerContext } from "../app/hooks/usePlayerContext";

export default function PositionBox({
	position,
	player,
	dialogRef,
}: PositionBoxProps) {
	const { setSelectedPosition, setTempPlayer, selectedPlayers } =
		usePlayerContext();
	const openDialog = () => {
		const selectedPlayer = selectedPlayers.find((a) => a.position === position);
		if (selectedPlayer === undefined) return;
		setTempPlayer(selectedPlayer);
		dialogRef?.current?.showModal();
	};
	return (
		<button
			onClick={() => {
				openDialog();
				setSelectedPosition(position);
			}}
			className="cursor-pointer  size-full  grid grid-rows-[auto_1fr] z-50 transition-all bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 duration-200 backdrop-blur-[3px] hover:backdrop-blur-sm"
		>
			<div className="w-full text-center m-auto mt-10">
				<p className="text-4xl text-[#fd6d26] ">{position}</p>
			</div>
			<div className="text-center m-auto flex gap-2 flex-col flex-1 size-full justify-center items-center -mt-5">
				<p className="text-[min(2vw,20rem)] text-slate-800 font-bold inline-flex items-center">
					#{player?.number}
				</p>
				<p className="text-xs md:text-base font-medium text-slate-700 text-center leading-tight">
					{player?.name}
				</p>
			</div>
		</button>
	);
}
