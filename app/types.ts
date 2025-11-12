import { RefObject } from "react";

export interface PositionBoxProps {
	position: number;
	dialogRef: RefObject<HTMLDialogElement | null>;
	player: Player;
}

export interface Player {
	number: string;
	name: string;
	position: number;
}

export interface PlayerContextType {
	setSelectedPosition: (position: number | null) => void;
	selectedPosition: number | null;
	setTempPlayer: (player: Player) => void;
	selectedPlayers: Player[];
	setSelectedPlayers: (array: Player[]) => void;
}
