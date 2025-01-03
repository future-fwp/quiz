import Profile from "../../assets/m_product02_image.png";
import { Link } from "react-router-dom";

type CategoryData = {
	id: number;
	name: string;
};
const CardCategory = ({ id, name }: CategoryData) => {
	return (
		<li className="min-w-[300px]">
			<div className="bg-gradient-to-r from-secondary to-blueStrokeCard p-1">
				<Link
					to="/quizpage"
					state={{ categoryId: id, category: name }}
					className="flex h-full w-full flex-col gap-2 bg-black "
				>
					<img
						src={name}
						alt={name}
					/>

					<p className="p-5">{name}</p>
				</Link>
			</div>
		</li>
	);
};

export default CardCategory;
