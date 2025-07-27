import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#00E7F9',
        'primary-pink': '#FC004E',
        'text-secondary': '#ABABAB',
        'text-navigation': '#A9A9A9',
      },
      boxShadow: {
        'cyan': '2px 2px 10px 0px #00E7F9',
      }
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.text-shadow-pink': {
          textShadow: '0px 4px 4px #FC004E',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config
