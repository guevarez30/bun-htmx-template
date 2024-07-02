/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: [ 'class' ],
    content: [
        './views/**/*.{js,jsx}'
    ],
    prefix: '',
    theme: { },
    plugins: [ require('tailwindcss-animate'), require('daisyui') ],
    daisyui: {
        themes: [ 'emerald' ]
    }
};
