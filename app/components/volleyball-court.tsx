export default function VolleyballCourt({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			id="half-court-boundaries"
			// className="w-[1000px] h-[800px] bg-[#0873A7] relative"
			className="max-w-7xl w-full aspect-5/4 bg-[#2F8C6F] relative"
		>
			<div
				id="net"
				className=" w-4/6  h-4 md:h-8 rounded-md bg-gray-600 border border-black mx-auto"
			/>

			<div
				id="half-court"
				className="w-3/5 h-4/5 bg-[#FF915C] mx-auto relative border-white border-4 md:border-8 border-t-0 md:border-t-0"
			>
				<div
					id="3m-line"
					className="absolute w-full h-1/3 border-b-2 md:border-b-4 border-white pointer-events-none"
				/>

				{children}
			</div>
		</div>
	);
}
