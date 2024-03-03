/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals = [...config.externals, 'bcrypt'];
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/tasty-menu-6e6a7.appspot.com/o/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            }
        ],
    }
};

export default nextConfig;
