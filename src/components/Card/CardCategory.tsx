import "../../react-app-env.d.ts";

import { Link } from "react-router-dom";

type CategoryData = {
	id: number;
	name: string;
	onClick: () => void;
};
const CardCategory = ({ id, name, onClick }: CategoryData) => {
	return (
		<li className="min-w-[300px]">
			<div className="bg-gradient-to-r from-secondary to-blueStrokeCard p-1">
				<Link
					to={`/quizpage`}
					state={{ categoryId: id, category: name, difficulty: "easy" }}
					onClick={onClick}
					className="flex h-full w-full flex-col gap-2 bg-black "
					data-testid="category-link"
				>
					<img
						src={
							"https://s3-alpha-sig.figma.com/img/c27b/4d17/4c5653a7bebb3742eee5f6452a3e0689?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkr6vAuWerP2tJazys2zxoLHGxbYQseW~de1lJluyk592hZLjnxuJDYwE9BCWc1ftKbtFj7OJvq9nYI0bJtN83LZV0Ma0EfEx6g1LRycf9ravYixK-Xjai4kfDkE9ME-vSgGFZOInxDvuIUBL9fg0G1B6IxiyvHy8Ahsti17~gNOLi~p5bHrz~oYYM9EK3NF~Wsyi-CKIfOZ7Uhf6xWaghfna7Gi2yhJZzzhDzQbSKqIbvZeR8iY4cwFfnntfOyX6BbJWpWW60C~7TH4qvUF4PrKIa1lILKiNAWaRj-yDAsF7dDfJn7j8Hx34g1OZZoAE-VjLUI3~0Ldi-cbfa0c5A__"
						}
						alt={name}
					/>

					<p className="p-5">{name}</p>
				</Link>
			</div>
		</li>
	);
};

export default CardCategory;
