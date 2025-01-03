import "./App.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Category from "./pages/Category";
import QuizPage from "./pages/QuizPage";

function App() {
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
