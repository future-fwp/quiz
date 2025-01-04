import { useRef } from "react";
import CardAnswer from "../components/Card/CardAnswer";
import { useState, useEffect } from "react";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import { useLocation, useNavigate } from "react-router-dom";
import { useScore } from "../ScoreProvider";

type QuestionData = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};

const QuizPage = ({
	selectedDifficulty,
	numberOfQuestions,
	typeQuestion,
}: {
	selectedDifficulty: string;
	numberOfQuestions: number;
	typeQuestion: string;
}) => {
	const { score, setScore, setAnsweredQuestions } = useScore();
	const HeadingRef = useRef<HTMLHeadingElement | null>(null);
	const [headingWidth, setHeadingWidth] = useState(0);
	const [questionData, setQuestionData] = useState<QuestionData[] | null>(null);
	const [questionIndex, setQuestionIndex] = useState(0);

	console.log("QuizPage", selectedDifficulty, numberOfQuestions, typeQuestion);

	useEffect(() => {
		// This will run after the component renders and HeadingRef.current is assigned
		if (HeadingRef.current) {
			setHeadingWidth(HeadingRef.current.offsetWidth); // Use offsetWidth for more accurate width
		}
	}, []);

	const location = useLocation();

	const navigate = useNavigate(); // Add useNavigate

	const { categoryId, category } = location.state || {
		categoryId: null,
		category: "",
	}; // Get difficulty

	console.log(categoryId, "categoryId");

	let stringNumber = numberOfQuestions.toString();
	useEffect(() => {
		/*************  ✨ Codeium Command ⭐  *************/
		/**
		 * Fetches questions from the Open Trivia DB API.
		 *
		 * @see https://opentdb.com/api.php
		 * @param {number} amount - The number of questions to fetch.
		 * @param {number} category - The category of the questions to fetch.
		 * @param {string} difficulty - The difficulty of the questions to fetch.
		 * @param {string} type - The type of questions to fetch.
		 * @returns {Promise<void>}
		 */
		/******  486a0e42-b9bd-4a6a-a2a3-fbf415021f49  *******/ const fetchData = async () => {
			const url = `https://opentdb.com/api.php?amount=${stringNumber}&category=${categoryId}&difficulty=${selectedDifficulty}&type=${typeQuestion}`;
			try {
				const response = await fetch(url);
				const data = await response.json();
				setQuestionData(data.results);
			} catch (error) {
				console.error("Failed to fetch questions:", error);
			}
		};
		if (categoryId) {
			fetchData();
		}
	}, [categoryId]);

	if (!questionData) {
		return <div>Fetching quiz questions, please wait...</div>;
	}

	// Process the choices to include the correct answer
	const currentQuestion = questionData[questionIndex];

	const choices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(
		() => Math.random() - 0.5
	);

	const handleAnswerClick = (selectedAnswer: string) => {
		// Check if it's the last question
		if (questionIndex <= questionData.length - 1) {
			setQuestionIndex(questionIndex + 1);
			if (setScore && setAnsweredQuestions) {
				// Correct logic: Increment score if the answer is correct
				if (currentQuestion.correct_answer === selectedAnswer) {
					setScore(score + 1);
				}

				setAnsweredQuestions((prevAnswers) => [
					...prevAnswers,
					{
						question: currentQuestion.question,
						userAnswer: selectedAnswer,
						correct_answer: currentQuestion.correct_answer,
					},
				]);
			}
		}
		if (questionIndex === questionData.length - 1) {
			// Handle end of quiz (e.g., show results)
			navigate("/achievement");
		}
	};

	return (
		<div className="max-w-[1200px] min-h-screen flex justify-center items-center relative mx-auto px-5 py-10 ">
			<CircleGlow addlayout="top-[0px] -z-10" />
			<Triangle addlayout=" right-0 top-[20px] -z-10" />
			<div>
				<div className="flex flex-col items-center justify-center">
					<h2 className="text-h2 inline-block font-bold text-transparent  bg-clip-text bg-gradient-to-r from-white to-grayStroke  pb-4  text-center mb-5">
						{category} {selectedDifficulty} Quiz
					</h2>
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
							onClick={() => handleAnswerClick(choice)} // Pass the choice to the handler
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuizPage;
