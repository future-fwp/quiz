import { render, screen, waitFor, fireEvent, act } from "@testing-library/react";
import CardCategory from "../components/Card/CardCategory";
// import { Link } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserAuthContext } from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { debug } from "node:console";
import Home from "../pages/Home";

// const MockQuizPage = () => {
// 	const location = useLocation();
// 	return <div>{JSON.stringify(location.state)}</div>;
// };

import QuizPage from "../pages/QuizPage";

const mockQuestionData = [
	{
		category: "Entertainment: Video Games",
		type: "multiple",
		difficulty: "easy",
		question: "What is the name of the main character in the &quot;Legend of Zelda&quot; franchise?",
		correct_answer: "Link",
		incorrect_answers: ["Mario", "Zelda", "Ganon"],
	},
	// Add more mock questions here if needed
];

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ results: mockQuestionData }),
	})
) as jest.Mock;

beforeEach(() => {
	(fetch as jest.Mock).mockClear();
});

// describe("CardCategory component", () => {
// 	const mockCategoryData = {
// 		id: 9,
// 		name: "General Knowledge",
// 	};

// 	it("renders the category name and image", () => {
// 		render(
// 			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
// 				<BrowserRouter>
// 					<CardCategory {...mockCategoryData} />
// 				</BrowserRouter>
// 			</UserAuthContext.Provider>
// 		);

// 		expect(screen.getByText("General Knowledge")).toBeInTheDocument();
// 		expect(screen.getByRole("img", { name: "General Knowledge" })).toHaveAttribute(
// 			"src",
// 			"https://s3-alpha-sig.figma.com/img/c27b/4d17/4c5653a7bebb3742eee5f6452a3e0689?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkr6vAuWerP2tJazys2zxoLHGxbYQseW~de1lJluyk592hZLjnxuJDYwE9BCWc1ftKbtFj7OJvq9nYI0bJtN83LZV0Ma0EfEx6g1LRycf9ravYixK-Xjai4kfDkE9ME-vSgGFZOInxDvuIUBL9fg0G1B6IxiyvHy8Ahsti17~gNOLi~p5bHrz~oYYM9EK3NF~Wsyi-CKIfOZ7Uhf6xWaghfna7Gi2yhJZzzhDzQbSKqIbvZeR8iY4cwFfnntfOyX6BbJWpWW60C~7TH4qvUF4PrKIa1lILKiNAWaRj-yDAsF7dDfJn7j8Hx34g1OZZoAE-VjLUI3~0Ldi-cbfa0c5A__"
// 		);
// 	});

// 	it("links to the correct quiz page with categoryId", () => {
// 		const mockCategoryData = {
// 			id: 9,
// 			name: "General Knowledge",
// 		};

// 		const testRoute = "/category";

// 		render(
// 			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
// 				<MemoryRouter initialEntries={[testRoute]}>
// 					<Routes>
// 						<Route
// 							path="/"
// 							element={<Home />}
// 						></Route>
// 						<Route
// 							path="/category"
// 							element={<CardCategory {...mockCategoryData} />}
// 						/>
// 						{/* ... other routes */}
// 					</Routes>
// 				</MemoryRouter>
// 				,
// 			</UserAuthContext.Provider>
// 		);

// 		const linkElement = screen.getByRole("link", { name: /general knowledge/i });
// 		debug(linkElement);

// 		// Assertions
// 		expect(linkElement).toBeInTheDocument();
// 		fireEvent.click(linkElement);
// 		expect(linkElement).toHaveAttribute("href", "/quizpage?categoryId=9");

// 		// If you need to simulate a click:

// 		// Check if the QuizPage received the correct category data
// 		// expect(screen.getByText('{"categoryId":9,"category":"General Knowledge"}')).toBeInTheDocument();
// 	});
// });

describe("QuizPage Component", () => {
	afterEach(() => {
		// Clean up mocks after each test
	});

	it("renders loading state while fetching data", () => {
		const testRoute = "/quizpage";
		render(
			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
				<MemoryRouter initialEntries={[testRoute]}>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						></Route>
						<Route
							path="/quizpage"
							element={<QuizPage />}
						/>
						{/* ... other routes */}
					</Routes>
				</MemoryRouter>
				,
			</UserAuthContext.Provider>
		);
		expect(screen.getByText("Fetching quiz questions, please wait...")).toBeInTheDocument();
	});

	it("fetches and displays quiz data correctly", async () => {
		const testRoute = "/quizpage";
		await act(async () => {
			render(
				<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
					<MemoryRouter initialEntries={[testRoute]}>
						<Routes>
							<Route
								path="/"
								element={<Home />}
							></Route>
							<Route
								path="/quizpage"
								element={<QuizPage />}
							/>
							{/* ... other routes */}
						</Routes>
					</MemoryRouter>
				</UserAuthContext.Provider>
			);
		});

		// Wait for the data to load
		await waitFor(() => {
			expect(screen.queryByText(/Fetching quiz questions, please wait.../i)).toBeNull();
		});

		expect(screen.getByText(/Some text from your quiz data/i)).toBeInTheDocument();

		// Check if choices are displayed
		mockQuestionData[0].incorrect_answers.forEach((answer) => {
			expect(screen.getByText(answer)).toBeInTheDocument();
		});
		expect(screen.getByText(mockQuestionData[0].correct_answer)).toBeInTheDocument();
	});

	it("moves to the next question when an answer is clicked", async () => {
		const testRoute = "/quizpage";
		render(
			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
				<MemoryRouter initialEntries={[testRoute]}>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/quizpage"
							element={<QuizPage />}
						/>
						{/* ... other routes */}
					</Routes>
				</MemoryRouter>
				,
			</UserAuthContext.Provider>
		);
		await screen.findByText(/What is the name of the main character/i);

		// Click on any answer choice
		const answerButton = screen.getByText(mockQuestionData[0].correct_answer);
		fireEvent.click(answerButton);

		// Since we only have one mock question, it should display the "Quiz finished!" message
		expect(screen.getByText("Quiz finished!")).toBeInTheDocument();
	});

	it("displays the correct question number", async () => {
		const testRoute = "/quizpage";
		render(
			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
				<MemoryRouter initialEntries={[testRoute]}>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						></Route>
						<Route
							path="/category"
							element={<QuizPage />}
						/>
						{/* ... other routes */}
					</Routes>
				</MemoryRouter>
				,
			</UserAuthContext.Provider>
		);
		await screen.findByText(/What is the name of the main character/i);

		expect(screen.getByText("Question: 1 / 1")).toBeInTheDocument();
	});
});
// use properties for link attribute
