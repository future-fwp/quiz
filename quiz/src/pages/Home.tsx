import { useState } from "react";
import ChrismasTree from "../components/Glow/ChrismasTree";
import CircleGlow from "../components/Glow/CircleGlow";
import Triangle from "../components/Glow/Triangle";

// Instead of:
const Home = ({
	setIsLoggedIn,
	setUserInfo,
}: {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	setUserInfo?: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [errorUsername, setErrorUsername] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!name) {
			setErrorUsername("Please enter your username");

			// if use prisma database has invalid result // wrtie the result here
		}
		if (!password) {
			setErrorPassword("Please enter your password");
		}
		if (password.length < 8) {
			setErrorPassword("Password must be at least 8 characters");
		}
		if (errorUsername || errorPassword) {
			return;
		}
		setErrorUsername(""); // test login & error
		setErrorPassword("");
		setIsLoggedIn(true);
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
