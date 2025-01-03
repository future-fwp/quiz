import { useContext } from "react";
import { UserAuthContext } from "../App";
const Navbar = () => {
	const { isLoggedIn, logout } = useContext(UserAuthContext);
	return (
		<div>
			{!isLoggedIn ? (
				<div className="flex justify-end">
					<button className="text-white bg-black px-3 py-2">Sign in</button>
					<button className="text-black bg-white rounded-full px-3 py-2">Sign up</button>
				</div>
			) : (
				<div className="flex justify-end">
					<button
						className="text-white bg-black px-3 py-2"
						onClick={logout}
					>
						Logout
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
