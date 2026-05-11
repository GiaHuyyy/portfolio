import { Redis } from "@upstash/redis";

const getEnv = (key: string) => {
  const value = process.env[key];
  return value && value.length > 0 ? value : undefined;
};

const url = getEnv("UPSTASH_REDIS_REST_URL") ?? getEnv("KV_REST_API_URL");
const token = getEnv("UPSTASH_REDIS_REST_TOKEN") ?? getEnv("KV_REST_API_TOKEN");

if (!url || !token) {
  throw new Error(
    "Redis env vars are missing. Set UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN or KV_REST_API_URL/KV_REST_API_TOKEN.",
  );
}

export const redis = new Redis({ url, token });
