const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    important: true,
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            lr: '1400px',
            xl: '1440px',
        },
        fontSize: {
            ...defaultTheme.fontSize,
            hero: [
                '48px',
                {
                    letterSpacing: '-0.02em;',
                    lineHeight: '96px',
                    fontWeight: 700,
                },
            ],
            h1: [
                '36px',
                {
                    letterSpacing: '-0.02em;',
                    lineHeight: '36px',
                    fontWeight: 700,
                },
            ],
            h2: [
                '30px',
                {
                    letterSpacing: '-0.01em;',
                    lineHeight: '36px',
                    fontWeight: 700,
                },
            ],
            h3: [
                '28px',
                {
                    letterSpacing: '-0.01em;',
                    lineHeight: '30px',
                    fontWeight: 700,
                },
            ],
            h4: [
                '24px',
                {
                    letterSpacing: '-0.01em;',
                    lineHeight: '28px',
                    fontWeight: 700,
                },
            ],
            h5: [
                '24px',
                {
                    letterSpacing: '-0.01em;',
                    lineHeight: '28px',
                    fontWeight: 500,
                },
            ],
            body: [
                '18px',
                {
                    letterSpacing: '-0.01em;',
                    lineHeight: '26px',
                },
            ],
            caption: [
                '16px',
                {
                    lineHeight: '24px',
                },
            ],
            'caption-2': [
                '14px',
                {
                    lineHeight: '20px',
                },
            ],
        },
        extend: {
            colors: {
                transparent: 'transparent',

                red: '#FF7A9A',
                blue: '#75A8FF',
                pink: '#F16E69',
                purple: '#A755DD',
                green: '#86efac',
                'light-green': '#86EFAC',
                yellow: '#FFCA7A',
                white: '#FFFFFF',

                'dark-pink': '#221825',
                'dark-blue': '#0F182A',
                'dark-1000': '#0D0415',
                'dark-900': '#161522',
                'dark-800': '#202231',
                'dark-700': '#2E3348',
                'dark-600': '#1C2D49',
                'dark-500': '#223D5E',

                'pink-lightest': '#fce9ee',
                'pink-light': '#F79C99',
                'pink-deep': 'rgba(248,	113,113, 0.62)',
                'pink-deep-opaque': 'rgba(249, 151, 155)',
                'pink-deeper': 'rgba(248, 113,113)',
                deep: '#131725',

                // Darkmode
                'dm-primary': '#15171D',
                'dm-secondary': '#1B1E25',
                'dm-tertiary': '#292C36',
                'dm-gray': '#383B45',
                'dm-text-primary': '#A7A7A7',
                'dm-text-secondary': '#D8D8D8',
                'dm-text-tertiary': '#7F7F7F',

                'rainbow-purple': '#8E63F6',
                'rainbow-pink': '#FE868C',

                primary: '#BFBFBF',
                'low-emphesis': '#575757',

                tag: {
                    green: {
                        bg: 'rgba(209, 250, 229, var(--tw-bg-opacity))',
                        fg: 'rgba(16, 185, 129, var(--tw-bg-opacity))',
                    },
                },
            },
            backgroundImage: (_) => ({
                ...defaultTheme.backgroundImage,
                'bentobox-hero': "url('/src/assets/kashi/bentobox-hero.jpg')",
                'bentobox-logo': "url('/src/assets/kashi/bentobox-logo.png')",
            }),
            fontFamily: {
                sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
            },
            scale: {
                99: '0.99',
            },
            borderRadius: {
                ...defaultTheme.borderRadius,
                none: '0',
                px: '1px',
                sm: '0.313rem',
                DEFAULT: '0.625rem',
            },
            textColor: {
                ...defaultTheme.textColor,
                'low-emphesis': '#575757',
                primary: '#7B7C89',
                secondary: '#7F7F7F',
                'high-emphesis': '#131725',
                'off-white': '#fff',
            },
            borderColor: {
                ...defaultTheme.borderColor,
                secondary: '#7F7F7F',
            },
            backgroundColor: {
                ...defaultTheme.backgroundColor,
                input: 'white',
            },
            boxShadow: {
                ...defaultTheme.boxShadow,
                'pink-glow': '0px 57px 90px -47px rgba(250, 82, 160, 0.15)',
                'blue-glow': '0px 57px 90px -47px rgba(39, 176, 230, 0.17)',
                'pink-glow-hovered': '0px 57px 90px -47px rgba(250, 82, 160, 0.30)',
                'blue-glow-hovered': '0px 57px 90px -47px rgba(39, 176, 230, 0.34)',

                'swap-blue-glow': '0px 50px 250px -47px rgba(39, 176, 230, 0.29)',
            },
            minWidth: {
                ...defaultTheme.minWidth,
                150: '150px',
            },
            ringWidth: {
                ...defaultTheme.ringWidth,
                DEFAULT: '1px',
            },
            padding: {
                ...defaultTheme.padding,
                px: '1px',
                '3px': '3px',
            },
            outline: {
                ...defaultTheme.outline,
                'low-emphesis': '#575757',
            },
            gridTemplateColumns: {
                reward: '40% 10% 10% 40%',
                14: 'repeat(14, minmax(0, 1fr))',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked', 'disabled'],
            backgroundImage: ['hover', 'focus'],
            borderColor: ['checked', 'disabled'],
            cursor: ['disabled'],
            opacity: ['hover', 'disabled'],
        },
    },
    plugins: [
        // require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),

        plugin(function ({ addUtilities }) {
            addUtilities({
                '.gradiant-border-top': {
                    // background:
                    //     'linear-gradient(to right, rgba(39, 176, 230, 0.2) 0%, rgba(250, 82, 160, 0.2) 100%) left top no-repeat',
                    // backgroundSize: '100% 1px'
                    borderTop: '1px solid',
                    borderImageSlice: 1,
                    borderImageSource: 'linear-gradient(to right, #743ad5, #d53a9d)',
                },
                '.gradiant-border-bottom': {
                    background: 'linear-gradient(to right, rgba(39, 176, 230, 0.2) 0%, rgba(250, 82, 160, 0.2) 100%) left bottom no-repeat',
                    backgroundSize: '100% 1px',
                },
            })
        }),
        plugin(function ({ addUtilities }) {
            addUtilities(
                {
                    '.border-gradient': {
                        padding: '2px',
                        border: 'double 1px transparent',
                        borderRadius: '0.375rem',
                        backgroundImage: 'linear-gradient(#202231, #202231), linear-gradient(to right, #0993EC, #F338C3)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                    },
                },
                {
                    variants: ['responsive'],
                }
            )
        }),
    ],
    corePlugins: {
        fontFamily: true,
        preflight: true,
    },
}
