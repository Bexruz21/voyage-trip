/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем ESLint проверки при билде
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Отключаем TypeScript проверки при билде  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Компиляторные настройки
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Включить SWC минификацию
  swcMinify: true,
};

export default nextConfig;