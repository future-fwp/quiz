import "./App.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Category from "./pages/Category";
import QuizPage from "./pages/QuizPage";
import { useState } from "react";
import Navbar from "./pages/Navbar";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState("");

	return (
		<div className="flex flex-col">
			<div>
				<Navbar
					isLoggedIn={isLoggedIn}
					userInfo={userInfo}
				/>
			</div>
			<div>
				{!isLoggedIn && (
					<Home
						setIsLoggedIn={setIsLoggedIn}
						setUserInfo={setUserInfo}
					/>
				)}
				{isLoggedIn && <Category />}
				{isLoggedIn && <QuizPage />}
				{isLoggedIn && <Achievement />}
			</div>
		</div>
	);
}

export default App;
