const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true, // auto register service worker
  // scope: '/',
  sw: "pwa-service-worker.js", // custom service worker filename
  reloadOnOnline: true,
  customWorkerDir: "worker",
  fallbacks: {
    image: "",
    audio: "",
    video: "",
    font: "",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [];
  },
  images: {
    domains: [],
  },

  sentry: {
    disableServerWebpackPlugin: !["production"].includes(
      process.env.NEXT_PUBLIC_APP_ENV || "local",
    ),
    disableClientWebpackPlugin: !["production"].includes(
      process.env.NEXT_PUBLIC_APP_ENV || "local",
    ),
  },

  // eslint-disable-next-line unused-imports/no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.plugins = config.plugins || [];

    // * https://react-svgr.com/docs/what-is-svgr/
    // * https://react-svgr.com/docs/next/
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/, // *.svg?url
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ["@svgr/webpack"],
    });

    // * https://github.com/webpack-contrib/url-loader#readme
    // config.module.rules.push({
    //   test: /\.(png|jpg|gif)$/i,
    //   use: {
    //     loader: "url-loader",
    //     options: {
    //       limit: 8192,
    //     },
    //   },
    // });

    return config;
  },
};

let moduleExports = nextConfig;
moduleExports = withPWA(moduleExports);
moduleExports = withSentryConfig(moduleExports);
moduleExports = withBundleAnalyzer(moduleExports);

module.exports = moduleExports;
