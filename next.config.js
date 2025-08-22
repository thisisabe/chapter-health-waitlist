/** @type {import('next').NextConfig} */
const nextConfig = {
  // This config remains intentionally minimal.  We rely on CSS and Tailwind
  // for styling and avoid any experimental or ESM features to keep the build
  // straightforward.  Image domains can be extended here if you add external
  // images.
  images: {
    // Allow serving our local images from the public folder.
    // Additional remote patterns can be added here when necessary.
    remotePatterns: []
  }
}

module.exports = nextConfig
