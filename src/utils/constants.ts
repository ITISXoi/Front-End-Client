export const __prod__ = process.env.NODE_ENV === "production";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const isServer = typeof window === "undefined";
export const SMART_CONTRACT_ADDRESS = '0x24Ba199AecB186240d3639575d914f52D0A49213';