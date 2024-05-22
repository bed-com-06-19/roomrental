import { plugins } from './tailwind.config.cjs';

const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [tailwindcss('./tailwind.config.cjs'), autoprefixer],
};