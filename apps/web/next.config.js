module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  env: {
    NEXT_PUBLIC_API: process.env.API,
  },
};
