import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const getMonthKey = (date = new Date()) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

export async function GET() {
  const month = getMonthKey();
  const key = `pageviews:${month}`;

  const total = (await redis.get<number>(key)) ?? 0;

  return NextResponse.json(
    { ok: true, month, total },
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}
