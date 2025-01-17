import { useRef, useState, useEffect } from "react";
import CardAnswer from "../components/Card/CardAnswer";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import { useLocation, useNavigate } from "react-router-dom";
import { useScore } from "../ScoreProvider";
import { motion } from "framer-motion";

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
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const location = useLocation();
	const navigate = useNavigate();
	const { categoryId, category } = location.state || { categoryId: null, category: "" };
	const stringNumber = numberOfQuestions.toString();

	useEffect(() => {
		if (HeadingRef.current) {
			setHeadingWidth(HeadingRef.current.offsetWidth);
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://opentdb.com/api.php?amount=${stringNumber}&category=${categoryId}&difficulty=${selectedDifficulty}&type=${typeQuestion}`;
			setIsLoading(true);
			setError(null);

			try {
				const response = await fetch(url);

				// Handle rate limiting (status 429)
				if (response.status === 429) {
					console.log("Rate limit exceeded. Retrying after 5 seconds...");
					await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds
					return fetchData(); // Retry the request
				}

				if (!response.ok) {
					throw new Error(`Failed to fetch questions: ${response.statusText}`);
				}

				const data = await response.json();
				if (data.results && data.results.length > 0) {
					setQuestionData(data.results);
				} else {
					throw new Error("No questions found.");
				}
			} catch (error) {
				console.error("Failed to fetch questions:", error);
				setError("Failed to fetch questions. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		};

		if (categoryId) {
			fetchData();
		}
	}, [categoryId, stringNumber, selectedDifficulty, typeQuestion]);

	const handleAnswerClick = (selectedAnswer: string) => {
		if (questionData && questionIndex < questionData.length) {
			const currentQuestion = questionData[questionIndex];

			// Update score and answered questions
			if (setScore && setAnsweredQuestions) {
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

			// Move to the next question or navigate to the results page
			if (questionIndex === questionData.length - 1) {
				navigate("/achievement");
			} else {
				setQuestionIndex(questionIndex + 1);
			}
		}
	};

	if (isLoading) {
		return <div className="text-center py-10">Fetching quiz questions, please wait...</div>;
	}

	if (error) {
		return <div className="text-center py-10 text-red-500">{error}</div>;
	}

	if (!questionData || questionData.length === 0) {
		return <div className="text-center py-10">No questions available.</div>;
	}

	const currentQuestion = questionData[questionIndex];
	const choices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(
		() => Math.random() - 0.5
	);

	const questionVariants = {
		hidden: { x: "100%", scale: 0.8 },
		visible: { x: 0, scale: 1 },
		exit: { x: "-100%", scale: 0.8 },
	};

	return (
		<div className="max-w-[1200px] min-h-screen flex justify-center items-center relative mx-auto px-5 py-10">
			<CircleGlow addlayout="top-[0px] -z-10" />
			<Triangle addlayout="right-0 top-[20px] -z-10" />
			<motion.div
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={questionVariants}
				transition={{ duration: 0.5 }}
			>
				<div className="flex flex-col items-center justify-center">
					<h2 className="text-h2 inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke pb-4 text-center mb-5">
						{category} {selectedDifficulty} Quiz
					</h2>
					<h3
						dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
						ref={HeadingRef}
						className={`text-h3 text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke inline-block pb-4 text-center mb-5 w-[calc(${headingWidth}px)]`}
					></h3>
				</div>

				<p className="text-center mb-5">
					Question: {questionIndex + 1} / {questionData.length}
				</p>

				<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{choices.map((choice, index) => (
						<CardAnswer
							key={index}
							choice={choice}
							isSelected={false}
							onClick={() => handleAnswerClick(choice)}
						/>
					))}
				</ul>
			</motion.div>
		</div>
	);
};

export default QuizPage;
