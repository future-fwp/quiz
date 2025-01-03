import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
// Import your Publishable Key

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider
			publishableKey={"pk_test_ZW5nYWdpbmctcGlnZW9uLTgzLmNsZXJrLmFjY291bnRzLmRldiQ"}
			afterSignOutUrl="/"
		>
			<App />
		</ClerkProvider>
	</StrictMode>
);
