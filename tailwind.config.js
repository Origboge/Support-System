/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    purple: '#8B5CF6',
                    blue: '#3B82F6',
                }
            }
        },
    },
    plugins: [],
}