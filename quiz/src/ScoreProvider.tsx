// src/ScoreContext.js (or any appropriate location)
import { createContext, useState, useContext } from "react";
type AnswerData = {
	question: string;
	userAnswer: string;
	correct_answer: string;
};

const ScoreContext = createContext<{
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>> | null;
	answeredQuestions: AnswerData[];
	setAnsweredQuestions: React.Dispatch<React.SetStateAction<AnswerData[]>> | null;
}>({
	score: 0,
	setScore: null,
	answeredQuestions: [{ question: "", userAnswer: "", correct_answer: "" }],
	setAnsweredQuestions: null,
}); // Initialize with 0

const ScoreProvider = ({ children }: { children: React.ReactNode }) => {
	const [score, setScore] = useState(0);
	const [answeredQuestions, setAnsweredQuestions] = useState<AnswerData[]>([]);

	return (
		<ScoreContext.Provider value={{ score, setScore, answeredQuestions, setAnsweredQuestions }}>
			{children}
		</ScoreContext.Provider>
	);
};

// Custom hook to easily access score context
export const useScore = () => {
	const context = useContext(ScoreContext);
	if (!context) {
		throw new Error("useScore must be used within a ScoreProvider");
	}
	return context;
};

export default ScoreProvider;
