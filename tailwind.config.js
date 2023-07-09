/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
extend: {
		fontFamily: {
				'Markazi': ["Markazi Text", "serif"],
				'Karla': ["Karla", "sans-serif"],
			},
		},

		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			lemon: "#F4CE14",
			olive: "#495E57",
			red: "#FF0000",
			green: "#00FF00",
			grey: "#808080",
		},

		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1044px",
		},	plugins: [],
};

