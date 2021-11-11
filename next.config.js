/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    i18n: {
        localeDetection: false,
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};