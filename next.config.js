/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/boards/new": { page: "/boards/new" },
    "/markets": { page: "/markets" },
    "/markets/new": { page: "/markets/new" },
    "/mypage": { page: "/mypage" },
    "/point": { page: "/point" },
    "/login": { page: "/login" },
    "/signup": { page: "/signup" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
