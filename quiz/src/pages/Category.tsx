import CardCategory from "../components/Card/CardCategory";

import React from "react";

// const CardCategoriesGroup = ({ category, type }: { category: string; type: string }) => {
// 	return (
// 		<ul className="flex gap-10 relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-grayStroke/20 before:to-transparent after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-grayStroke/20">
// 			<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<CardCategory category={"      Lorem ipsum dolor sit amet."} />
// 			<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
// 		</ul>
// 	);
// };

// refactor later

//
const Category = () => {
	return (
		<div className="max-w-[1200px] mx-auto px-8 py-10 ">
			<div className="flex justify-between max-w-[768px] mx-auto">
				<h4 className="text-h4 text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke">
					Select level of difficulties
				</h4>
				<select
					name=""
					id=""
					className="text-white bg-gradient-to-br from-grayStroke to-gray-500 "
				>
					<option value="">Easy</option>
					<option value="">Medium</option>
					<option value="">Hard</option>
				</select>
			</div>
			<div className="flex flex-col gap-3 ">
				<h2 className="text-h2  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke w-[200px]  ">
					Multiple Choice
				</h2>
				<ul className="flex gap-10 overflow-x-scroll relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-grayStroke/20 before:to-transparent after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-grayStroke/20">
					<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
				</ul>
			</div>
			<div className="flex flex-col gap-3 ">
				<h2 className="text-h2  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke w-[200px]  ">
					True/False
				</h2>
				<ul className="flex gap-10 overflow-x-scroll relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-grayStroke/20 before:to-transparent after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-grayStroke/20">
					<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
				</ul>
			</div>
		</div>
	);
};

export default Category;
