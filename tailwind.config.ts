import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
} satisfies Config;
