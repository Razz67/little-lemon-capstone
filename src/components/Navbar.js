import React, { useState } from "react";
import logo from "../images/Logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => {
		setToggle(!toggle);
	};
	return (
		<nav className="flex text-[Markazi] text-olive max-w-[1240px] px-4 m-auto justify-between items-center h-32 sticky top-0 z-30 pt-10">
			<img className="w-2/5" src={logo} alt="logo" />

			<ul className="uppercase hidden md:flex">
				<li className="p-4  hover:text-lemon">Home</li>
				<li className="p-4  hover:text-lemon">About</li>
				<li className="p-4  hover:text-lemon">Menu</li>
				<li className="p-4  hover:text-lemon">Reservations</li>
				<li className="p-4  hover:text-lemon">Order Online</li>
				<li className="p-4  hover:text-lemon">Signin</li>
			</ul>

			<div onClick={toggleMenu} className="block md:hidden">
				{!toggle ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
			</div>
			<div
				className={
					toggle
						? "fixed text-black left-0 top-0 w-[60%] ease-in-out duration-500 h-full bg-[#EE9972] border-r border-r-lemon-900"
						: "fixed left-[-100%]"
				}
			>
				<img className="w-1/2 mb:w-3/5" src={logo} alt="logo" />

				<ul className="uppercase">
					<li className="p-4 border-b-2  hover:text-[#EDEFEE]">Home</li>
					<li className="p-4 border-b-2   hover:text-[#EDEFEE]">About</li>
					<li className="p-4 border-b-2   hover:text-[#DDEFEE]">Menu</li>
					<li className="p-4 border-b-2   hover:text-[#EDEFEE]">
						Reservations
					</li>
					<li className="p-4 border-b-2   hover:text-[#EDEFEE]">
						Order Online
					</li>
					<li className="p-4  hover:text-[#EDEFEE]">Signin</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
