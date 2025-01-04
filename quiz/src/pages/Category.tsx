import { useNavigate } from "react-router-dom";
import CardCategory from "../components/Card/CardCategory";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import { useState, useEffect } from "react";

//
const Category = () => {
	const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
	const [selectedDifficulty, setSelectedDifficulty] = useState<string>("easy"); // State for difficulty
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
	const handleCategoryClick = (id: number, name: string) => {
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
