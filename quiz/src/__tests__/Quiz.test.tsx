import React from "react";
import { render, screen } from "@testing-library/react";
import CardCategory from "../components/Card/CardCategory";
import { Link } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock Link from react-router-dom
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	Link: jest.fn(({ to, state, children }) => (
		<Link
			to={to}
			data-testid="category-link"
			state={state}
		>
			{children}
		</Link>
	)),
}));

// Mock the image import
jest.mock("../assets/m_product02_image.png", () => ({
	default: "test-image-url",
}));

describe("CardCategory component", () => {
	const mockCategoryData = {
		id: 9,
		name: "General Knowledge",
	};

	it("renders the category name and image", () => {
		render(<CardCategory {...mockCategoryData} />);

		expect(screen.getByText("General Knowledge")).toBeInTheDocument();
		expect(screen.getByRole("img", { name: "General Knowledge" })).toHaveAttribute("src", "test-image-url");
	});

	it("links to the correct quiz page with categoryId", () => {
		render(<CardCategory {...mockCategoryData} />);

		const linkElement = screen.getByTestId("category-link");
		expect(linkElement).toHaveAttribute("href", "/quizpage");
		expect(linkElement).toHaveAttribute("state", JSON.stringify({ categoryId: 9, category: "General Knowledge" }));
	});
});
