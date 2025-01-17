import { useNavigate } from "react-router-dom";
import CardCategory from "../components/Card/CardCategory";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
//
const Category = ({
	selectedDifficulty,
	setSelectedDifficulty,
	numberOfQuestions,
	setNumberOfQuestions,
	typeQuestion,
	setTypeQuestion,
}: {
	selectedDifficulty: string;
	setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>;
	numberOfQuestions: number;
	setNumberOfQuestions: React.Dispatch<React.SetStateAction<number>>;
	typeQuestion: string;
	setTypeQuestion: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

	const navigate = useNavigate();
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch("https://opentdb.com/api_category.php");
				const data = await response.json();

				// Extract unique categories from the results
				setCategories(data.trivia_categories);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchCategories();
	}, []);

	const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedDifficulty(event.target.value);
	};

	const handleQuestionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setNumberOfQuestions(parseInt(event.target.value));
	};

	const handleTypeQuestionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setTypeQuestion(event.target.value);
	};
	/**
	 * Handles the click event for a category card.
	 * @param {number} id The ID of the category.
	 * @param {string} name The name of the category.
	 */
	const handleCategoryClick = (id: number, name: string) => {
		/**
		 * Navigate to the quiz page with the selected category ID and name
		 * as well as the selected difficulty.
		 */
		navigate("/quizpage", {
			state: {
				categoryId: id,
				category: name,
				difficulty: selectedDifficulty, // Pass difficulty
			},
		});
	};

	return (
		<motion.div
			className="max-w-[1200px] relative  mx-auto px-8 py-10 "
			initial={{ opacity: 0 }} // Start faded out
			animate={{ opacity: 1 }} // Fade in
			transition={{ duration: 0.8 }}
		>
			<CircleGlow addlayout="top-[100px] left-[0px] -z-10" />
			<Triangle addlayout="right-0  -z-10" />
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className="flex flex-col md:flex-row justify-between max-w-[768px] mx-auto"
			>
				<h4 className="text-h4 text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke">
					Select level of difficulties
				</h4>
				<select
					name="difficulty"
					id="difficulty"
					className="text-white bg-gradient-to-br from-grayStroke to-gray-500"
					value={selectedDifficulty}
					onChange={handleDifficultyChange}
				>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
				<h4 className="text-h4 text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke">
					Number of questions
				</h4>
				<select
					name="difficulty"
					id="difficulty"
					className="text-white bg-gradient-to-br from-grayStroke to-gray-500"
					value={numberOfQuestions}
					onChange={handleQuestionChange}
				>
					<option value="10">10 Questions</option>
					<option value="20">20 Questions</option>
					<option value="30">30 Questions</option>
					<option value="40">40 Questions</option>
					<option value="50">50 Questions</option>
				</select>
				<h4 className="text-h4 text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke">
					Type questions
				</h4>
				<select
					name="difficulty"
					id="difficulty"
					className="text-white bg-gradient-to-br from-grayStroke to-gray-500"
					value={typeQuestion}
					onChange={handleTypeQuestionChange}
				>
					<option value="multiple">Multiple Choice</option>
					<option value="boolean">True or False</option>
				</select>
			</motion.div>
			<div className="flex flex-col gap-3 ">
				<motion.h2
					initial={{ x: -30, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="text-h2  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke w-[200px]  "
				>
					Multiple Choice
				</motion.h2>
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8, staggerChildren: 0.1 }} // Stagger children
					className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 overflow-x-scroll relative  "
				>
					<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
					{categories.map((category) => (
						<CardCategory
							key={category.id}
							id={category.id}
							name={category.name}
							onClick={() => handleCategoryClick(category.id, category.name)}
						/>
					))}

					<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
				</motion.ul>
			</div>
		</motion.div>
	);
};

export default Category;
// after useEffect so can I use useCallback for select option so that it won't rerender anytime
