import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		// Navbar Section
		<nav className="sticky top-0 z-30 container mx-auto p-1">
			{/* flex container */}
			<div className="flex items-center justify-between">
				{/* Logo */}
				<div className="pt-2 mr-16 w-18">
					<img src={logo} alt="logo" />
				</div>

				{/* Nav Menu */}
				<div className="hidden md:flex space-x-8">
					<Link
						to="/"
						className="text-olive hover:bg-gray-700 hover:text-lemon px-3 py-2 text-[18px] font-medium"
					>
						Home
					</Link>

					<Link
						to="/about"
						className="text-olive hover:bg-gray-700 hover:text-lemon px-3 py-2 text-[18px] font-medium"
					>
						About
					</Link>

					<Link
						to="/menu"
						className="text-olive hover:bg-gray-700 hover:text-lemon px-3 py-2 text-[18px] font-medium"
					>
						Menu
					</Link>
					<Link
						to="/reservations"
						className="text-olive hover:bg-gray-700 hover:text-lemon px-3 py-2 text-[18px] font-medium"
					>
						Reservations
					</Link>

					<Link
						to="/order-online"
						className="text-olive hover:bg-gray-700 hover:text-lemon px-3 py-2 text-[18px] font-medium"
					>
						Order Online
					</Link>

					<Link
						to="/login"
						className="text-lemon hover:bg-gray-700 hover:text-olive px-3 py-2 text-[18px] font-medium"
					>
						Login
					</Link>
				</div>
			</div>
			{/* Button */}
			<div className="hidden items-center justify-end md:flex">
				<Link
					to="/signup"
					className="text-white hover:bg-lemon p-3 px-6 bg-olive md:text-[12px]
						font-medium rounded-full baseline"
				>
					Sign Up
				</Link>
			</div>

			{/* Hamburger Menu Section */}
			<div className="md:hidden">
				<button
					onClick={toggleMenu}
					type="button"
					className="text-gray-300 hover:text-lemon focus:outline-none focus:text-white"
					aria-label="Toggle menu"
				>
					<svg
						className="h-6 w-6 fill-current"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isMenuOpen ? (
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19 13H5v-2h14v2zm0-7H5V4h14v2zm0 12H5v-2h14v2z"
							/>
						) : (
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
							/>
						)}
					</svg>
				</button>
			</div>

			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							onClick={toggleMenu}
							className="text-gray-300 hover:bg-gray-700 hover:text-lemon block px-3 py-2 rounded-md text-base font-medium"
						>
							Home
						</Link>
						<Link
							to="/about"
							onClick={toggleMenu}
							className="text-gray-300 hover:bg-gray-700 hover:text-lemon block px-3 py-2 rounded-md text-base font-medium"
						>
							About
						</Link>
						<Link
							to="/menu"
							onClick={toggleMenu}
							className="text-gray-300 hover:bg-gray-700 hover:text-lemon block px-3 py-2 rounded-md text-base font-medium"
						>
							Menu
						</Link>{" "}
						<Link
							to="/reservations"
							onClick={toggleMenu}
							className="text-gray-300 hover:bg-gray-700 hover:text-lemon block px-3 py-2 rounded-md text-base font-medium"
						>
							Reservations
						</Link>{" "}
						<Link
							to="/order-online"
							onClick={toggleMenu}
							className="text-gray-300 hover:bg-gray-700 hover:text-lemon block px-3 py-2 rounded-md text-base font-medium"
						>
							Order Online
						</Link>{" "}
						<Link
							to="/login"
							onClick={toggleMenu}
							className="text-gray-300 hover:bg-gray-700 hover:text-lemon block px-3 py-2 rounded-md text-base font-medium"
						>
							Login
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
