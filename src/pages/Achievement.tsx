import Award from "../components/Icon/Award";
import { useContext } from "react";
import { UserAuthContext } from "../App";
import { useScore } from "../ScoreProvider";
const Achievement = () => {
	const { userInfo } = useContext(UserAuthContext);
	const { score, answeredQuestions } = useScore();

	// useEffect(() => {
	// 	const storedScore = localStorage.getItem("quizScore");
	// 	const storedAnswers = localStorage.getItem("answeredQuestions");

	// 	if (storedScore) {
	// 		setScore(parseInt(storedScore, 10));
	// 	}

	// 	// if (storedAnswers) {
	// 	// 	setAnsweredQuestions(JSON.parse(storedAnswers));
	// 	// }
	// }, []);

	return (
		<div className="w-full max-w-[48rem] px-2 md:px-6 md:py-10 mx-auto">
			<section className="flex flex-col sm:flex-row justify-between items-center ">
				<div className="bg-gradient-to-br  p-2 rounded-full from-secondary to-black">
					<div className="bg-black rounded-full p-10 flex items-center justify-center">
						<Award />
						<div>
							{userInfo && (
								<h2 className="text-h2 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-black">
									{userInfo}
								</h2>
							)}
						</div>
					</div>
				</div>
				<div className="bg-gradient-to-br p-2 rounded-full from-secondary to-black">
					<div className="bg-black rounded-full p-10 flex items-center justify-center">
						<h2 className="text-h2 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-black">
							{score} points
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
							{answeredQuestions.map((answer, index) => (
								<tr key={index}>
									<td className="border sm:p-2">{answer.question}</td>
									<td className="border sm:p-2">{answer.userAnswer}</td>
									<td className="border sm:p-2">{answer.correct_answer}</td>
								</tr>
							))}
							{/* Repeat the same structure for other rows */}
						</tbody>
					</table>
				</section>
			</main>
		</div>
	);
};

export default Achievement;

// this is achievemnt
