import Product from "../../assets/m_product02_image.png";
const CardCategory = ({ category }: { category: string }) => {
	return (
		<li className="min-w-[300px]">
			<div className="bg-gradient-to-r from-secondary to-blueStrokeCard p-1">
				<a
					href=""
					className="flex h-full w-full flex-col gap-2 bg-black "
				>
					<img
						src={Product}
						alt=""
					/>
					<p className="p-5">{category}</p>
				</a>
			</div>
		</li>
	);
};

export default CardCategory;
