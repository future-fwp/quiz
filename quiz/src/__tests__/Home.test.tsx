// src/__tests__/App.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; // Assuming App is in the same directory or adjust path accordingly
import "@testing-library/jest-dom";
import { UserAuthContext } from "../App";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";
import { BrowserRouter } from "react-router-dom";
describe("App Component", () => {
	test("renders login form when not logged in", () => {
		render(
			<UserAuthContext.Provider value={{ isLoggedIn: false, userInfo: "", login: jest.fn(), logout: jest.fn() }}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</UserAuthContext.Provider>
		);

		// Assertions for elements present when logged out
		expect(screen.getByText("Sign in to get started")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
	});
	test("renders logout button when logged in", () => {
		const mockLogout = jest.fn(); // Mock logout function

		render(
			<UserAuthContext.Provider
				value={{ isLoggedIn: true, userInfo: "testuser", login: jest.fn(), logout: mockLogout }}
			>
				<BrowserRouter>
					<Navbar />
				</BrowserRouter>
			</UserAuthContext.Provider>
		);

		// Assertions for logged-in state
		expect(screen.getByText("Logout")).toBeInTheDocument();

		// Simulate logout click
		fireEvent.click(screen.getByText("Logout"));
		expect(mockLogout).toHaveBeenCalledTimes(1);
	});
});
