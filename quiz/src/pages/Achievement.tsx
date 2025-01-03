import Award from "../components/Icon/Award";

const Achievement = () => {
	return (
		<div className="w-full max-w-[48rem] px-2 md:px-6 md:py-10 mx-auto">
			<section className="flex flex-col sm:flex-row justify-between items-center ">
				<div className="bg-gradient-to-br  p-2 rounded-full from-secondary to-black">
					<div className="bg-black rounded-full p-10 flex items-center justify-center">
						<Award />
					</div>
				</div>
				<div className="bg-gradient-to-br p-2 rounded-full from-secondary to-black">
					<div className="bg-black rounded-full p-10 flex items-center justify-center">
						<h2 className="text-h2 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-black">
							XXX
						</h2>
					</div>
				</div>
			</section>
			<main>
				<section>
					<table className="border border-collapse w-full sm:table-fixed">
						<thead>
							<tr>
								<th className="md:w-1/3 border sm:p-2">Question</th>
								<th className="md:w-1/3 border sm:p-2">Your answer</th>
								<th className="md:w-1/3 border sm:p-2">Solution</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border sm:p-2">
									<div className="font-bold">Question:</div>
									lorem ipsum dolor amet Hello world Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Autem, rem placeat. Nulla pariatur provident, dolor nobis id fuga ut magnam!
								</td>
								<td className="border sm:p-2">
									<div className="font-bold">Your answer:</div>
									Hello world
								</td>
								<td className="border sm:p-2">
									<div className="font-bold">Solution:</div>
									Solution content
								</td>
							</tr>
							{/* Repeat the same structure for other rows */}
						</tbody>
					</table>
				</section>
			</main>
		</div>
	);
};

export default Achievement;
