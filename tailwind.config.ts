import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				// ágape Brand Colors - Exact palette
				agape: {
					purple: {
						DEFAULT: '#9e5f85', // Strikemaster
						50: '#faf5f8',
						100: '#f5ebf1',
						200: '#ead6e2',
						300: '#d8b3c9',
						400: '#c08ba8',
						500: '#9e5f85',
						600: '#8a4d72',
						700: '#733e5e',
						800: '#60354f',
						900: '#512e43',
					},
					green: {
						DEFAULT: '#7CA35C', // Asparagus
						50: '#f6f9f3',
						100: '#eaf2e4',
						200: '#d5e5ca',
						300: '#b5d1a3',
						400: '#94b979',
						500: '#7CA35C',
						600: '#5f8545',
						700: '#4a6737',
						800: '#3e532f',
						900: '#354629',
					},
					yellow: {
						DEFAULT: '#f4cc44',  // Saffron
						50: '#fefaec',
						100: '#fdf3c9',
						200: '#fbe68f',
						300: '#f9d555',
						400: '#f4cc44',
						500: '#ebb316',
						600: '#cd8d0f',
						700: '#a96710',
						800: '#8b5014',
						900: '#744117',
					},
					red: {
						DEFAULT: '#a40404', // Bright Red
						50: '#fef2f2',
						100: '#fee2e2',
						200: '#fecaca',
						300: '#fca5a5',
						400: '#f87171',
						500: '#ef4444',
						600: '#dc2626',
						700: '#a40404',
						800: '#7f0303',
						900: '#5f0202',
					},
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				handwritten: ['Caveat', 'cursive'],
				rounded: ['Nunito', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
