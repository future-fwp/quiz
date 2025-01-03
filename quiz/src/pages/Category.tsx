// // import CardCategory from "../components/Card/CardCategory";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
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
		<div className="max-w-[1200px] relative  mx-auto px-8 py-10 ">
			<CircleGlow addlayout="top-[100px] left-[0px] -z-10" />
			<Triangle addlayout="right-0  -z-10" />
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
				<ul className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 overflow-x-scroll relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-grayStroke/20 before:to-transparent after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-grayStroke/20">
					<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
					{/* <CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} /> */}
					<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
				</ul>
			</div>
			<div className="flex flex-col gap-3 ">
				<h2 className="text-h2  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke w-[200px]  ">
					True/False
				</h2>
				<ul className="flex flex-col md:flex-row gap-10 overflow-x-scroll relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-grayStroke/20 before:to-transparent after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:to-grayStroke/20">
					<p className="before:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
					{/* <CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} />
					<CardCategory category={"      Lorem ipsum dolor sit amet."} /> */}
					<p className="after:contents-[''] inline-block w-10 h-10 bg-gradient-to-r from-grayStroke to-gray-500"></p>
				</ul>
			</div>
		</div>
	);
};

export default Category;
