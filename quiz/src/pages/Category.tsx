import { useNavigate } from "react-router-dom";
import CardCategory from "../components/Card/CardCategory";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import { useState, useEffect } from "react";

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
		console.log(selectedDifficulty, "selectedDifficulty");
	};

	const handleQuestionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setNumberOfQuestions(parseInt(event.target.value));
		console.log(numberOfQuestions, "numberOfQuestions");
	};

	const handleTypeQuestionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setTypeQuestion(event.target.value);
		console.log(typeQuestion, "typeQuestion");
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
		<div className="max-w-[1200px] relative  mx-auto px-8 py-10 ">
			<CircleGlow addlayout="top-[100px] left-[0px] -z-10" />
			<Triangle addlayout="right-0  -z-10" />
			<div className="flex justify-between max-w-[768px] mx-auto">
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
			</div>
			<div className="flex flex-col gap-3 ">
				<h2 className="text-h2  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke w-[200px]  ">
					Multiple Choice
				</h2>
				<ul className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 overflow-x-scroll relative  ">
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
				</ul>
			</div>
			<div className="flex flex-col gap-3 ">
				<h2 className="text-h2  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke w-[200px]  ">
					True/False
				</h2>
				<ul className="flex flex-col md:flex-row gap-10 overflow-x-scroll relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-grayStroke/20 before:to-transparent after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-grayStroke/20">
					<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
					{categories.map((category, _) => (
						<CardCategory
							key={category.id}
							id={category.id}
							name={category.name}
							onClick={() => handleCategoryClick(category.id, category.name)}
						/>
					))}
					<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
				</ul>
			</div>
		</div>
	);
};

export default Category;
