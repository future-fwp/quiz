import "./App.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Category from "./pages/Category";
import QuizPage from "./pages/QuizPage";
import { useState, createContext } from "react";
import Navbar from "./pages/Navbar";

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

	// Function to handle user logout
	const handleLogout = () => {
		setIsLoggedIn(false);
		setUserInfo("");
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
			<div className="flex flex-col">
				<div>
					<Navbar />
				</div>
				<div>
					{!isLoggedIn && <Home />}
					{isLoggedIn && <Category />}
					{isLoggedIn && <QuizPage />}
					{isLoggedIn && <Achievement />}
				</div>
			</div>
		</UserAuthContext.Provider>
	);
}

export default App;
