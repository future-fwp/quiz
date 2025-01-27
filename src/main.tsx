import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Import your Publishable Key
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
