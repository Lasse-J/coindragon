/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'assets.coingecko.com',
				port: '',
				pathname: '/coins/images/**',
			},
		],
		domains: ['coin-images.coingecko.com'],
	},
}

module.exports = nextConfig
