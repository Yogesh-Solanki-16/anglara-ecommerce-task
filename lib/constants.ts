/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: "SHOP.CO",
  description: "Find Clothes That Match Your Style",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const CACHE_REVALIDATION = {
  products: 3600, // 1 hour
  categories: 7200, // 2 hours
  default: 60, // 1 minute
} as const;

export const CART_CONFIG = {
  storageKey: "shop-co-cart",
  defaultDiscount: 20, // percentage
  deliveryFee: 15, // fixed fee
} as const;
