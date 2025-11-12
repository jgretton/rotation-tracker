import { createContext } from "react";
import { PlayerContextType } from "../types";

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default PlayerContext;
