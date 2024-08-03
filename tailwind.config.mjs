/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#03045E',
				'dark-brown': '#474306',
				'yellow': '#F5EE84',
				'light-yellow': '#FBF8CC',
				'too-light-yellow': '#F7F197',
			},
			height: {
				'custom-hero-mobile': 'calc(100vh - 60px)',
				'custom-hero': 'calc(100vh - 80px)',
			},
		},
	},
	plugins: [],
}
