export async function fetchUptimeStatus(apiKey: string) {
    const res = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, format: "json" }),
    });
  
    const data = await res.json();
    return data.monitors || [];
  }
  