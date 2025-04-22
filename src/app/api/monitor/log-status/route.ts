import { fetchUptimeStatus } from "@/lib/monitoring/fetchUptimeStatus";
import { logIncident } from "@/lib/monitoring/logIncident";
import { NextResponse } from "next/server";

export async function GET() {
  const monitors = await fetchUptimeStatus(process.env.UPTIMEROBOT_API_KEY!);

  for (const monitor of monitors) {
    if (monitor.status !== 2) {
      await logIncident("DOWN", `${monitor.friendly_name} est hors ligne`);
    }
  }

  return NextResponse.json({ success: true });
}
