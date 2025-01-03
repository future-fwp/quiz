import { useRef } from "react";
import CardAnswer from "../components/Card/CardAnswer";
import { useState, useEffect } from "react";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import Navbar from "./Navbar";

type QuestionData = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};

const QuizPage = () => {
	const HeadingRef = useRef<HTMLHeadingElement | null>(null);
	const [headingWidth, setHeadingWidth] = useState(0);
	const [questionData, setQuestionData] = useState<QuestionData[] | null>(null);
	const [questionIndex, setQuestionIndex] = useState(0);

	useEffect(() => {
		// This will run after the component renders and HeadingRef.current is assigned
		if (HeadingRef.current) {
			setHeadingWidth(HeadingRef.current.offsetWidth); // Use offsetWidth for more accurate width
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
			const data = await response.json();
			setQuestionData(data.results); // Assuming you want to display the first question
		};

		fetchData();
	}, []);
	if (!questionData) {
		return <div>Loading...</div>;
	}

	// Process the choices to include the correct answer
	const currentQuestion = questionData[questionIndex];

	const choices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(
		() => Math.random() - 0.5
	);

	const handleAnswerClick = () => {
		// Check if it's the last question
		if (questionIndex < questionData.length - 1) {
			setQuestionIndex(questionIndex + 1);
		} else {
			// Handle end of quiz (e.g., show results)
			console.log("Quiz finished!");
		}
	};

	return (
		<div className="max-w-[1200px] min-h-screen flex justify-center items-center relative mx-auto px-5 py-10 ">
			<CircleGlow addlayout="top-[0px] -z-10" />
			<Triangle addlayout=" right-0 top-[20px] -z-10" />
			<div>
				<div className="flex justify-center">
					<h3
						ref={HeadingRef}
						className={`text-h3 text-transparent  bg-clip-text bg-gradient-to-r from-white to-grayStroke  inline-block pb-4  text-center mb-5  w-[calc(${headingWidth}px)]`}
					>
						{currentQuestion.question}
					</h3>
				</div>

				<p>
					Question: {questionIndex + 1} / {questionData.length}
				</p>

				<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{choices.map((choice, _) => (
						<CardAnswer
							key={JSON.stringify(choice)}
							choice={choice}
							isSelected={false}
							onClick={handleAnswerClick}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuizPage;
