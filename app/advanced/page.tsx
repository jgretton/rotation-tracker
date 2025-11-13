"use client";
import { useState } from "react";
import PlayerLineup from "../../components/player-lineup";
import VolleyballCourt from "../../components/volleyball-court";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import PlayerContext from "../context/PlayerContext";
import { Player } from "../types";

/*
A way of inputing team data for the rotation slips. Thinking maybe 6 inputs and a +player button to create the team sheet.
Court position buttons becomes a selector in modal to pick players for starting lineup.
confirm starting lineup.

Shows game mode where user can rotate. Also, able to reset to start position, make subs for players on the bench. Tool at the side to allow user to select next server and then show the rotation from there.


SUPER ADVANCED
show serve receive rotation based on current rotation. fix the points from the setters position, select setter at the confirm starting lineup.
*/
const initialStarting = [
	{ name: "", number: "" },
	{ name: "", number: "" },
	{ name: "", number: "" },
	{ name: "", number: "" },
	{ name: "", number: "" },
	{ name: "", number: "" },
];
export default function AdvancedPage() {
	const [step, setStep] = useState<number>(0);
	const nextStep = () => setStep(step + 1);
	const prevStep = () => {
		if (step === 0) return;
		else setStep(step - 1);
	};
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	const [startingLineUp, setStartingLineup] =
		useState<Omit<Player, "position">[]>(initialStarting);

	return (
		<PlayerContext.Provider value={{ selectedPlayers, startingLineUp }}>
			<div className="flex flex-col min-h-screen items-center  bg-zinc-50 font-sans">
				<h1>Rotation Tracker</h1>
				{step === 0 && (
					<div className="max-w-lg w-full grid gap-10">
						<PlayerLineup />
						<ButtonGroup className="flex justify-between">
							<Button
								variant={"outline"}
								onClick={() => prevStep()}
								disabled={step === 0}
							>
								Prev Step
							</Button>{" "}
							<Button variant={"outline"} onClick={() => nextStep()}>
								Next Step
							</Button>
						</ButtonGroup>
					</div>
				)}
				{step === 1 && (
					<VolleyballCourt>
						<div className="size-full grid grid-cols-3 grid-rows-2 md:gap-5 gap-2 p-5"></div>
					</VolleyballCourt>
				)}
			</div>
		</PlayerContext.Provider>
	);
}
