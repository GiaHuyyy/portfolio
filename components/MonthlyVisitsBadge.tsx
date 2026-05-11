"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/MonthlyVisitsBadge.module.css";

type StatsResponse = { ok: true; month: string; total: number } | { ok: false; error?: string };

const MonthlyVisitsBadge = () => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    let cancelled = false;

    fetch("/api/stats")
      .then((res) => res.json() as Promise<StatsResponse>)
      .then((data) => {
        if (cancelled) return;
        if (data && "ok" in data && data.ok) {
          setTotal(typeof data.total === "number" ? data.total : 0);
        }
      })
      .catch(() => {
        // Ignore analytics failures
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (total === null) return null;

  return (
    <div className={styles.badge} aria-label={`Tổng truy cập tháng: ${total}`}>
      <span className={styles.label}>Tổng truy cập tháng:</span>
      <span className={styles.value}>{total}</span>
    </div>
  );
};

export default MonthlyVisitsBadge;
