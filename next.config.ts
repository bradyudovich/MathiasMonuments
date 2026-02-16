import type { NextConfig } from 'next'

// Parse and validate GITHUB_REPOSITORY environment variable
// Returns [owner, repoName] if valid, or null if invalid
const parseGitHubRepository = (): [string, string] | null => {
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return null
  
  const parts = repo.split('/')
  if (parts.length !== 2) return null
  
  return [parts[0], parts[1]]
}

// Detect if we're deploying to a GitHub Pages subpath
// GITHUB_REPOSITORY format is "owner/repo"
const isPagesSubpath = (): boolean => {
  const parsed = parseGitHubRepository()
  if (!parsed) return false
  
  const [owner, repoName] = parsed
  // User/org pages repos are in format "owner.github.io"
  // Project pages repos need basePath
  return repoName !== `${owner}.github.io`
}

const getBasePath = (): string => {
  if (!isPagesSubpath()) return ''
  
  const parsed = parseGitHubRepository()
  if (!parsed) return ''
  
  const repoName = parsed[1]
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
