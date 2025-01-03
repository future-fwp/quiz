import { render, screen, fireEvent } from "@testing-library/react";
import CardCategory from "../components/Card/CardCategory";
import { Link } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserAuthContext } from "../App";
import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
// Mock Link from react-router-dom
// jest.mock("react-router-dom", () => ({
// 	...jest.requireActual("react-router-dom"),
// 	Link: jest.fn(({ to, state, children }) => (
// 		<Link
// 			to={to}
// 			data-testid="category-link"
// 			state={state}
// 		>
// 			{children}
// 		</Link>
// 	)),
// }));

// Mock the image import
// jest.mock("../assets/m_product02_image.png", () => ({
// 	default: "test-image-url",
// }));

const mockCategoryData = {
	id: 9,
	name: "General Knowledge",
};

const MockQuizPage = () => {
	const location = useLocation();
	return <div>{JSON.stringify(location.state)}</div>;
};

describe("CardCategory component", () => {
	const mockCategoryData = {
		id: 9,
		name: "General Knowledge",
	};

	it("renders the category name and image", () => {
		render(
			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
				<BrowserRouter>
					<CardCategory {...mockCategoryData} />
				</BrowserRouter>
			</UserAuthContext.Provider>
		);

		expect(screen.getByText("General Knowledge")).toBeInTheDocument();
		expect(screen.getByRole("img", { name: "General Knowledge" })).toHaveAttribute(
			"src",
			"https://s3-alpha-sig.figma.com/img/c27b/4d17/4c5653a7bebb3742eee5f6452a3e0689?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkr6vAuWerP2tJazys2zxoLHGxbYQseW~de1lJluyk592hZLjnxuJDYwE9BCWc1ftKbtFj7OJvq9nYI0bJtN83LZV0Ma0EfEx6g1LRycf9ravYixK-Xjai4kfDkE9ME-vSgGFZOInxDvuIUBL9fg0G1B6IxiyvHy8Ahsti17~gNOLi~p5bHrz~oYYM9EK3NF~Wsyi-CKIfOZ7Uhf6xWaghfna7Gi2yhJZzzhDzQbSKqIbvZeR8iY4cwFfnntfOyX6BbJWpWW60C~7TH4qvUF4PrKIa1lILKiNAWaRj-yDAsF7dDfJn7j8Hx34g1OZZoAE-VjLUI3~0Ldi-cbfa0c5A__"
		);
	});

	it("links to the correct quiz page with categoryId", () => {
		render(
			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
				<BrowserRouter>
					<Routes>
						{" "}
						{/* Use Routes to render different components based on the URL */}
						<Route
							path="/category"
							element={<CardCategory {...mockCategoryData} />}
						/>
						<Route
							path="/quizpage"
							element={<MockQuizPage />}
						/>{" "}
						{/* Render MockQuizPage when on "/quizpage" */}
					</Routes>
				</BrowserRouter>
			</UserAuthContext.Provider>
		);

		const linkElement = screen.getByRole("link", { name: "General Knowledge" });
		fireEvent.click(linkElement);
		// Check if the QuizPage received the correct category data
		expect(screen.getByText('{"categoryId":9,"category":"General Knowledge"}')).toBeInTheDocument();
	});
});
