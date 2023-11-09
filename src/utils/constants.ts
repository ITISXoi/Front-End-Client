export const __prod__ = process.env.NODE_ENV === "production";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const isServer = typeof window === "undefined";
