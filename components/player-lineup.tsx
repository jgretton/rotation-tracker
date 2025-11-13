"use client";
import { useState } from "react";
import { Player } from "../app/types";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { usePlayerContext } from "@/app/hooks/usePlayerContext";

export default function PlayerLineup() {
	const { startingLineUp, setStartingLineup } = usePlayerContext();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
		setStartingLineup((prevState) => {
			const tempArray = [...prevState];
			const playerInfo = {
				...tempArray[index],
				[e.target.name]: e.target.value,
			};
			tempArray[index] = playerInfo;

			return tempArray;
		});
	};

	const removePlayer = (index: number) => {
		setStartingLineup((prevState) => {
			const tempArray = [...prevState];
			tempArray.splice(index, 1);

			return tempArray;
		});
	};

	return (
		<div className="">
			<div className=" grid gap-3">
				{startingLineUp.map((player, idx) => {
					return (
						<div className="flex gap-5 items-end" key={idx}>
							<div className="flex flex-col w-10 gap-2 items-center">
								<Label htmlFor={`number-${idx}`}>#</Label>
								<Input
									onChange={(e) => onChange(e, idx)}
									value={player.number}
									type="text"
									name="number"
									id={`number-${idx}`}
								/>
							</div>
							<div className="flex flex-col flex-1 gap-2">
								<Label htmlFor={`name-${idx}`} className="">
									Name
								</Label>
								<Input
									onChange={(e) => onChange(e, idx)}
									value={player.name}
									type="text"
									name="name"
									id={`name-${idx}`}
								/>
							</div>
							{idx >= 6 && (
								<Button
									variant={"destructive"}
									onClick={() => removePlayer(idx)}
								>
									Remove
								</Button>
							)}
						</div>
					);
				})}
				<Button
					type="button"
					variant={"default"}
					onClick={() =>
						setStartingLineup((prevState) => [
							...prevState,
							{ name: "", number: "" },
						])
					}
				>
					+ Add Another Player
				</Button>
			</div>
		</div>
	);
}
