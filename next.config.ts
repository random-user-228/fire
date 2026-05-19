import type { NextConfig } from "next";
module.exports = {
  reactStrictMode: false,
}


import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',                  // Де зберігати згенерований Service Worker
  disable: process.env.NODE_ENV === 'development', // Вимикаємо в режимі розробки, щоб не кешувати код
  register: true,                  // Автоматична реєстрація
  // skipWaiting: true,               // Removed as it is not a valid property in PluginOptions
  cacheOnFrontEndNav: true,        // Кешувати сторінки при переході по Link
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
});

const nextConfig: NextConfig = {
  /* config options here */
  
};


export default withPWA(nextConfig);