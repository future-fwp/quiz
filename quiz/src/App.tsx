import "./App.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Category from "./pages/Category";
import QuizPage from "./pages/QuizPage";
import { useState, createContext } from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, Route

export const UserAuthContext = createContext<{
	isLoggedIn: boolean;
	userInfo: string;
	login: (userInfo: string) => void;
	logout: () => void;
}>({
	isLoggedIn: false,
	userInfo: "",
	login: () => {},
	logout: () => {},
});

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState("");

	const handleLogin = (userInfo: string) => {
		setIsLoggedIn(true);
		setUserInfo(userInfo);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		setUserInfo("");
	};

	const WrapperComponentOtherThanNavbar = ({ children }: { children: React.ReactNode }) => {
		/*************  ✨ Codeium Command ⭐  *************/
		/**
		 * Logs out the user by resetting the authentication state.
		 * Sets `isLoggedIn` to false and clears `userInfo`.
		 */

		/******  c3b05266-cf81-4500-a126-1cc67acb0b14  *******/ return (
			<div className="flex flex-col">
				<div>
					<Navbar />
				</div>
				<div>{children}</div>
			</div>
		);
	};

	return (
		<UserAuthContext.Provider
			value={{
				isLoggedIn,
				userInfo,
				login: handleLogin,
				logout: handleLogout,
			}}
		>
			<BrowserRouter>
				{" "}
				{/* Wrap your routes with BrowserRouter */}
				<Routes>
					{" "}
					{/* Use Routes component to define routes */}
					<Route
						path="/"
						element={
							<WrapperComponentOtherThanNavbar>
								<Home />
							</WrapperComponentOtherThanNavbar>
						}
					/>{" "}
					{/* Route for Home page */}
					<Route
						path="/achievement"
						element={
							isLoggedIn ? (
								<WrapperComponentOtherThanNavbar>
									<Achievement />
								</WrapperComponentOtherThanNavbar>
							) : (
								<WrapperComponentOtherThanNavbar>
									<Home />
								</WrapperComponentOtherThanNavbar>
							)
						}
					/>{" "}
					{/* Route for Achievement page, accessible only when logged in */}
					<Route
						path="/category"
						element={
							isLoggedIn ? (
								<WrapperComponentOtherThanNavbar>
									<Category />{" "}
								</WrapperComponentOtherThanNavbar>
							) : (
								<WrapperComponentOtherThanNavbar>
									<Home />
								</WrapperComponentOtherThanNavbar>
							)
						}
					/>{" "}
					{/* Route for Category page, accessible only when logged in */}
					<Route
						path="/quizpage"
						element={
							isLoggedIn ? (
								<WrapperComponentOtherThanNavbar>
									<QuizPage />{" "}
								</WrapperComponentOtherThanNavbar>
							) : (
								<WrapperComponentOtherThanNavbar>
									<Home />{" "}
								</WrapperComponentOtherThanNavbar>
							)
						}
					/>{" "}
					{/* Route for QuizPage, accessible only when logged in */}
				</Routes>
			</BrowserRouter>
		</UserAuthContext.Provider>
	);
}

export default App;
