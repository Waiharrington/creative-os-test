/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Paleta base
                'bg-primary': '#0F172A',
                'bg-card': '#1E293B',
                'text-primary': '#E5E7EB',
                'text-secondary': '#94A3B8',
                'accent-neutral': '#38BDF8',

                // Personas
                'andrea': '#C4B5FD',
                'wai': '#3B82F6',
                'ahorro': '#FDE68A',

                // Estados
                'status-healthy': '#10B981',
                'status-warning': '#F59E0B',
                'status-critical': '#EF4444',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
