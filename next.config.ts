import type { NextConfig } from 'next'

/**
 * Detect GitHub Pages configuration based on GITHUB_REPOSITORY environment variable.
 * Returns basePath and assetPrefix for subpath deployments.
 */
function getGitHubPagesConfig() {
  const repo = process.env.GITHUB_REPOSITORY
  
  if (!repo) {
    console.log(`🔧 GITHUB_REPOSITORY not set - building for local development`)
    console.log(`   No basePath will be applied`)
    return {}
  }
  
  const parts = repo.split('/')
  
  // Validate format: should be exactly "owner/repo"
  if (parts.length !== 2) {
    console.log(`⚠️  GITHUB_REPOSITORY has unexpected format: ${repo}`)
    console.log(`   Expected format: owner/repo`)
    console.log(`   No basePath will be applied`)
    return {}
  }
  
  const [owner, repoName] = parts
  
  // Check if this is a user/org pages repo (ends with .github.io)
  // These are served at the root path, so no basePath is needed
  const isUserPagesRepo = repoName.endsWith('.github.io')
  
  if (!isUserPagesRepo) {
    const basePath = `/${repoName}`
    console.log(`🔧 Detected GitHub Pages subpath deployment`)
    console.log(`   Repository: ${repo}`)
    console.log(`   Setting basePath and assetPrefix to: ${basePath}`)
    return {
      basePath,
      assetPrefix: basePath,
    }
  }
  
  console.log(`🔧 Detected root GitHub Pages deployment`)
  console.log(`   Repository: ${repo}`)
  console.log(`   No basePath needed`)
  return {}
}

const ghPagesConfig = getGitHubPagesConfig()

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
  
  // Expose base path to client components for constructing static asset URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: (ghPagesConfig as { basePath?: string }).basePath || '',
  },
  
  // Apply GitHub Pages configuration if detected
  ...ghPagesConfig,
}

export default nextConfig
