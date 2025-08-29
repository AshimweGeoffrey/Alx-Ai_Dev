/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Reduce file watching overhead
    optimizePackageImports: ["react", "react-dom"],
  },
  webpack: (config) => {
    // Ignore unnecessary directories to reduce file watchers
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/.next/**",
        "**/dist/**",
        "**/build/**",
        "**/.cache/**",
        "**/coverage/**",
        "**/.nyc_output/**",
        "**/tmp/**",
        "**/temp/**",
      ],
    };
    return config;
  },
};

module.exports = nextConfig;
