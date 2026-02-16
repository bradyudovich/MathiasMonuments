import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Force static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Add trailing slashes to URLs for better static hosting compatibility
  trailingSlash: true,
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Detect GitHub repository and set basePath for subpath deployments
  // GitHub Pages serves user/org repos at https://<user>.github.io/<repo>/
  // Only set basePath if this is NOT a user/org pages repo (user.github.io)
  ...((() => {
    const repo = process.env.GITHUB_REPOSITORY
    if (repo) {
      const [owner, repoName] = repo.split('/')
      // Check if this is a user/org pages repo (e.g., bradyudovich.github.io)
      const isUserPagesRepo = repoName === `${owner}.github.io`
      
      if (!isUserPagesRepo && repoName) {
        const basePath = `/${repoName}`
        console.log(`🔧 Detected GitHub Pages subpath deployment`)
        console.log(`   Repository: ${repo}`)
        console.log(`   Setting basePath and assetPrefix to: ${basePath}`)
        return {
          basePath,
          assetPrefix: basePath,
        }
      } else {
        console.log(`🔧 Detected root GitHub Pages deployment`)
        console.log(`   Repository: ${repo}`)
        console.log(`   No basePath needed`)
      }
    } else {
      console.log(`🔧 GITHUB_REPOSITORY not set - building for local development`)
      console.log(`   No basePath will be applied`)
    }
    return {}
  })()),
}

export default nextConfig
