module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  env: {
    NEXT_PUBLIC_API: process.env.API,
    NEXT_PUBLIC_WEB_APP_URL: process.env.WEB_APP_URL,
    NEXT_PUBLIC_ADMIN_APP_URL: process.env.ADMIN_APP_URL,
  },
};
