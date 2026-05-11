import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const getMonthKey = (date = new Date()) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

const isLikelyBot = (userAgent: string | null) => {
  if (!userAgent) return false;
  return /bot|crawler|spider|crawling|prerender/i.test(userAgent);
};

export async function POST(req: Request) {
  const ua = req.headers.get("user-agent");
  if (isLikelyBot(ua)) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const month = getMonthKey();
  const key = `pageviews:${month}`;

  const total = await redis.incr(key);

  return NextResponse.json({ ok: true, month, total });
}
