"use client";

import { useEffect, useState } from "react";

export default function StatusBadge() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_UPTIMEROBOT_READ_KEY,
          format: "json",
        }),
      });
      const data = await res.json();
      const app = data.monitors?.find((m: any) =>
        m.friendly_name?.toLowerCase()?.includes("novacore")
      );
      setIsOnline(app?.status === 2); // 2 = UP, 9 = DOWN
    };

    fetchStatus();
  }, []);

  if (isOnline === null) return null;

  return (
    <div
      className={`px-3 py-1 text-xs rounded font-bold tracking-wide ${
        isOnline ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      {isOnline ? "🟢 En ligne" : "🔴 Hors ligne"}
    </div>
  );
}
