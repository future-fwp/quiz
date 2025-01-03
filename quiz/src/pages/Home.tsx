const Home = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div>
				<h1 className="text-center text-h1 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke">
					Sign in to get started
				</h1>
				<form className="w-[440px] border p-5 mt-4 shadow-[10px_10px_20px_0px_#06DCEB]">
					<div className="flex flex-col mt-3">
						<label
							htmlFor=""
							className="text-h5  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke"
						>
							Email
						</label>
						<input
							type="text"
							className="outline-none w-full text-black placeholder:black text-h6 px-3 py-2"
							placeholder="Enter username"
						/>
					</div>
					<div className="flex flex-col mt-3">
						<label
							htmlFor=""
							className="text-h5  text-transparent bg-clip-text bg-gradient-to-r from-white to-grayStroke"
						>
							Password
						</label>
						<input
							type="password"
							className="outline-none w-full text-black placeholder:black text-h6 px-3 py-2"
							placeholder="Enter username"
						/>
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
						value="Sign in"
						className="border w-full px-3 py-2 mt-3 text-primary bg-white cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default Home;
