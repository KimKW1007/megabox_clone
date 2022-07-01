/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination:  `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko`,
      },
      {
        source: '/api/dramas',
        destination:  `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko&page=1`,
      },
    ]
  },
}

module.exports = nextConfig
