import { useContext } from "react";
import { UserAuthContext } from "../App";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const { isLoggedIn, logout } = useContext(UserAuthContext);
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/category");
	};
	return (
		<div>
			{!isLoggedIn ? (
				<div className="flex justify-end">
					<div className="flex items-center">
						<button className="text-white bg-black px-3 py-2">Sign in</button>
						<button className="text-black bg-white rounded-full px-3 py-2">Sign up</button>
					</div>
				</div>
			) : (
				<div className="flex justify-between">
					<div>
						<div className="flex items-center">
							<button onClick={handleBack}>BackPage</button>
						</div>
					</div>
					<div>
						<button
							className="text-white bg-black px-3 py-2"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
