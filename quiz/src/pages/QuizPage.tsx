import { useRef } from "react";
import CardAnswer from "../components/Card/CardAnswer";
import { useState, useEffect } from "react";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
const QuizPage = () => {
	const HeadingRef = useRef<HTMLHeadingElement | null>(null);
	const [headingWidth, setHeadingWidth] = useState(0);

	useEffect(() => {
		// This will run after the component renders and HeadingRef.current is assigned
		if (HeadingRef.current) {
			setHeadingWidth(HeadingRef.current.offsetWidth); // Use offsetWidth for more accurate width
		}
	}, []);

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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus?
					</h3>
				</div>

				<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<CardAnswer
						choice={
							" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, nam exercitationem minima similique soluta officiis omnis eligendi ipsa! Asperiores?"
						}
						isSelected={false}
					/>
					<CardAnswer
						choice={
							" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, nam exercitationem minima similique soluta officiis omnis eligendi ipsa! Asperiores?"
						}
						isSelected={false}
					/>
					<CardAnswer
						choice={
							" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, nam exercitationem minima similique soluta officiis omnis eligendi ipsa! Asperiores?"
						}
						isSelected={false}
					/>
					<CardAnswer
						choice={
							" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, nam exercitationem minima similique soluta officiis omnis eligendi ipsa! Asperiores?"
						}
						isSelected={false}
					/>
				</ul>
			</div>
		</div>
	);
};

export default QuizPage;
