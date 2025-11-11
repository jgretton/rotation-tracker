"use client";

import { RefObject } from "react";

interface PositionBoxProps {
	position: number;
	dialogRef: RefObject<HTMLDivElement>;
	player: {
		name: string;
		number: number;
		position: number;
	};
}

export default function PositionBox({
	position,
	player,
	dialogRef,
}: PositionBoxProps) {
	const openDialog = () => {
		dialogRef.current.showModal();
	};
	return (
		<button
			onClick={() => openDialog()}
			className="cursor-pointer hover:bg-white/40 size-full border border-white bg-white/20"
		>
			<p>{position}</p>
			<p>{player?.name}</p>
			<p>current position: {player?.position}</p>
		</button>
	);
}
