import Award from "../components/Icon/Award";

const Achievement = () => {
	return (
		<div className="max-w-[48rem] px-6 py-10 mx-auto">
			<section className="flex justify-between items-center ">
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
					<table className="border border-collapse w-full">
						<thead>
							<tr>
								<th className="w-1/3 border p-2 ">Question</th>
								<th className="w-1/3 border p-2 ">Your answer</th>
								<th className="w-1/3 border p-2 ">Solution</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="borde p-2 r">
									lorem ipsum dolor amet Hello world Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Autem, rem placeat. Nulla pariatur provident, dolor nobis id fuga ut magnam!
								</td>
								<td className="border p-2 ">Hello world</td>
								<td className="border p-2 ">Solution content</td>
							</tr>
							<tr>
								<td className="border p-2 ">lorem ipsum dolor amet Hello world</td>
								<td className="border p-2 ">Another answer</td>
								<td className="border p-2 ">Another solution</td>
							</tr>
							<tr>
								<td className="border p-2 ">lorem ipsum dolor amet Hello world</td>
								<td className="border p-2 ">Yet another answer</td>
								<td className="border p-2 ">Another solution</td>
							</tr>
						</tbody>
					</table>
				</section>
			</main>
		</div>
	);
};

export default Achievement;
