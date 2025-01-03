import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Category from "./pages/Category";
import QuizPage from "./pages/QuizPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Home />
			<Category />
			<QuizPage />
			<Achievement />
		</div>
	);
}

export default App;
