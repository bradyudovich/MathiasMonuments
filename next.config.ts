import type { NextConfig } from 'next'

// Detect if we're deploying to a GitHub Pages subpath
// GITHUB_REPOSITORY format is "owner/repo"
const isPagesSubpath = (): boolean => {
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return false
  
  const parts = repo.split('/')
  if (parts.length !== 2) return false
  
  const [owner, repoName] = parts
  // User/org pages repos are in format "owner.github.io"
  // Project pages repos need basePath
  return repoName !== `${owner}.github.io`
}

const getBasePath = (): string => {
  if (!isPagesSubpath()) return ''
  
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return ''
  
  const parts = repo.split('/')
  if (parts.length !== 2) return ''
  
  const repoName = parts[1]
  return `/${repoName}`
}

const basePath = getBasePath()

const nextConfig: NextConfig = {
  // Force static export for GitHub Pages
  output: 'export',
  
  // Add trailing slashes to all routes for consistent GitHub Pages routing
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set basePath and assetPrefix for GitHub Pages subpath deployment
  // This ensures all assets and routes work correctly when served from
  // https://username.github.io/repository-name/
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
}

export default nextConfig
