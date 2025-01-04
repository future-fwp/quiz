import "./App.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Category from "./pages/Category";
import QuizPage from "./pages/QuizPage";
import { useState, createContext } from "react";
import Navbar from "./pages/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import ScoreProvider from "./ScoreProvider";
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

	const location = useLocation();
	// const { hash, pathname, search } = location;

	const handleLogin = (userInfo: string) => {
		setIsLoggedIn(true);
		setUserInfo(userInfo);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		setUserInfo("");
	};

	// Wrapper component to avoid repetition
	const WrapperComponentOtherThanNavbar = ({ children }: { children: React.ReactNode }) => {
		return (
			<div className="flex flex-col">
				<Navbar />
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
			<ScoreProvider>
				<Routes>
					<Route
						path="/"
						element={
							<WrapperComponentOtherThanNavbar>
								<Home />
							</WrapperComponentOtherThanNavbar>
						}
					/>
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
					/>
					<Route
						path="/category"
						element={
							isLoggedIn ? (
								<WrapperComponentOtherThanNavbar>
									<Category />
								</WrapperComponentOtherThanNavbar>
							) : (
								<WrapperComponentOtherThanNavbar>
									<Home />
								</WrapperComponentOtherThanNavbar>
							)
						}
					/>
					<Route
						path={`/quizpage`}
						element={
							isLoggedIn ? (
								<WrapperComponentOtherThanNavbar>
									<QuizPage />
								</WrapperComponentOtherThanNavbar>
							) : (
								<WrapperComponentOtherThanNavbar>
									<Home />
								</WrapperComponentOtherThanNavbar>
							)
						}
					/>
				</Routes>
			</ScoreProvider>
		</UserAuthContext.Provider>
	);
}

export default App;
