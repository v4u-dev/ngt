module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {

        // screen sizes
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },

        // colors for background , borders, text 
        colors: {
            blue: '#0080F3',
            green: '#2DCE89',
            black: {
                100: '#3A3939',
                200: '#000000',
            },
            white: '#FFFFFF',
            gray: {
                100: '#EFEFEF',
                200: '#949494',
            },


            //fontsizes

            //box shadows
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none',
            },

            //opacity
            opacity: {
                '0': '0',
                '20': '0.2',
                '40': '0.4',
                '60': '0.6',
                '80': '0.8',
                '100': '1',
            },
        },
        extend: {
            // Font family
            fontFamily: {
                sans: [
                    'poppins'
                ]
            },
            //Border radius         
            borderRadius: {
                'none': '0',
                'sm': '5px',
                DEFAULT: '10px',
                'lg': '15px',
                'full': '20px',
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}