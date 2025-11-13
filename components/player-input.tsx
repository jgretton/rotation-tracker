import { Player } from "../app/types";

export default function PlayerInput({
	onChange,
	player,
}: {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	player: Player;
}) {
	return (
		<div className="flex gap-5">
			<div className="flex flex-col">
				<label className="text-center">#</label>
				<input
					onChange={(e) => onChange(e)}
					value={player.number}
					type="text"
					name="number"
					className="w-10 border px-2 py-1"
				/>
			</div>
			<div className="flex flex-col flex-1">
				<label className="">Name</label>
				<input
					onChange={(e) => onChange(e)}
					value={player.name}
					type="text"
					name="name"
					className="w-full border px-2 py-1"
				/>
			</div>
		</div>
	);
}
