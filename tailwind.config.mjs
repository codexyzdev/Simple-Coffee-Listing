/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			darkestNight: "#1B1D1F",
			midnightBlue: "#111315",
			metallicGray: "#6F757C",
			mintGreen: "#BEE3CC",
			pearlBeige: "#FEF7EE",
			sunnyYellow: "#F6C768",
			coralOrange: "#ED735D",
		},
	},
	plugins: [animations],
};
