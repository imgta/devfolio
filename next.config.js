/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@components'] = path.resolve(__dirname, 'src/app/components');
        return config;
    }
};

module.exports = nextConfig;
