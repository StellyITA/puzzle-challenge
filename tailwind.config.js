/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			colors: {
				indigo: {
					dark: '#00003a',
				},
				gray: {
					orange: '#6F6F60'
				}
			},
			fontFamily: {
				'digital': ['Digital']
			}
		},
  },
  plugins: []
}
