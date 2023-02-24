/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tmdb.org', 'themoviedb.org','localhost',"image.tmdb.org"],
  },
  
}

module.exports = nextConfig

// const tmdbConfig = {
  
// }
// module.exports = tmdbConfig
 
