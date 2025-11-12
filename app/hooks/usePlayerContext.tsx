import { useContext } from "react";
import PlayerContext from "../context/PlayerContext";
import { PlayerContextType } from "../types";

export function usePlayerContext(): PlayerContextType {
	const context = useContext(PlayerContext);
	if (context === undefined) {
		throw new Error(
			"usePlayerContext must be used within a PlayerContext.Provider"
		);
	}

	return context;
}
