import { useState, useContext } from "react";
import ChrismasTree from "../components/Glow/ChrismasTree";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";
import { UserAuthContext } from "../App";
import { useNavigate } from "react-router-dom";
// Instead of:
const Home = () => {
	const { login } = useContext(UserAuthContext);
	const [name, setName] = useState("");
	const navigate = useNavigate(); // Initialize useNavigate
	const [password, setPassword] = useState("");
	const [errorUsername, setErrorUsername] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Reset errors first
		setErrorUsername("");
		setErrorPassword("");

		// Validation flags
		let hasErrors = false;

		// Username validation
		if (!name?.trim()) {
			setErrorUsername("Please enter your username");
			hasErrors = true;
		}

		// Password validation - combining checks
		if (!password) {
			setErrorPassword("Please enter your password");
			hasErrors = true;
		} else if (password.length < 8) {
			setErrorPassword("Password must be at least 8 characters");
			hasErrors = true;
		}

		// Only proceed if no errors
		if (!hasErrors) {
			login(name);
			navigate("/category"); // Navigate to "/category" on successful login
		}
	};

	return (
		<div className="flex relative justify-center items-center h-screen">
			<CircleGlow addlayout="top-[-100px] -z-10 left-[-100px]" />

			<CircleGlow addlayout="bottom-[20px] -z-10 left-[40px]" />
			<div>
				<h1 className="text-center text-h1 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke">
					Sign in to get started
				</h1>
				<form
					onSubmit={handleSubmit}
					className="w-[440px] border p-5 mt-4 shadow-[10px_10px_20px_0px_#06DCEB]"
				>
					<div className="flex flex-col mt-3">
						<label
							htmlFor=""
							className="text-h5  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke"
						>
							Username
						</label>
						<input
							type="text"
							value={name}
							onChange={(event) => {
								setName(event.target.value);
							}}
							className="outline-none w-full text-black placeholder:black text-h6 px-3 py-2"
							placeholder="Enter username"
						/>
						{errorUsername && <p className="text-red-500 text-sm">{errorUsername}</p>}
					</div>
					<div className="flex flex-col mt-3">
						<label
							htmlFor=""
							className="text-h5  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke"
						>
							Password
						</label>
						<input
							value={password}
							onChange={(event) => {
								setPassword(event.target.value);
							}}
							type="password"
							className="outline-none w-full text-black placeholder:black text-h6 px-3 py-2"
							placeholder="Enter password"
						/>
						{errorPassword && <p className="text-red-500 text-sm">{errorPassword}</p>}
					</div>

					<div className="flex mr-2 items-center mt-2">
						<input
							type="checkbox"
							className="rounded size-6 border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						/>

						<p>remember me</p>
					</div>

					<input
						type="submit"
						value="Continue"
						className="border w-full px-3 py-2 mt-3 text-primary bg-white cursor-pointer"
					/>
				</form>
			</div>
			<ChrismasTree addlayout="right-[20px] -z-10 bottom-[20px]" />
			<Triangle addlayout="top-[20px] -z-10 right-[20px]" />
		</div>
	);
};

export default Home;
