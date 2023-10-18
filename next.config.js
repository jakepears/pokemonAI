/**
 * @format
 * @type {import('next').NextConfig}
 */

module.exports = {
	trailingSlash: true,
	output: 'export',
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://127.0.0.1:8000/api/:path*',
			},
		];
	},
};
