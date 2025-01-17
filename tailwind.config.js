/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "Inter",
			},
			colors: {
				primary: "#000000",
				secondary: "#06DCEB",
				text: "#FFFFFF",
				correct: "#16A249",
				blueStrokeCard: "#037C85",
				incorrect: "#F30004",
				grayStroke: "#666666",
			},
			fontSize: {
				h1: "32px",
				h2: "28px",
				h3: "24px",
				h4: "20px",
				h5: "18px",
				h6: "16px",
			},
		},
	},
	plugins: [],
};
