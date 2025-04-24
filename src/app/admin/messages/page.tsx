// ✅ src/app/admin/messages/page.tsx — Vue admin avec filtres IA avancés

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";

interface Message {
  id: string;
  role: string;
  content: string;
  created_at: string;
}

export default function MessagesAdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filtered, setFiltered] = useState<Message[]>([]);
  const [roleFilter, setRoleFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from("chat_messages").select("*").order("created_at", { ascending: false });
      if (data) {
        setMessages(data);
        setFiltered(data);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    let result = messages;
    if (roleFilter !== "all") {
      result = result.filter((msg) => msg.role === roleFilter);
    }
    if (search.trim() !== "") {
      result = result.filter((msg) => msg.content.toLowerCase().includes(search.toLowerCase()));
    }
    if (date) {
      result = result.filter((msg) => msg.created_at.startsWith(date));
    }
    setFiltered(result);
  }, [roleFilter, search, date, messages]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">📈 Historique des messages IA</h1>

      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="🔍 Rechercher un mot-clé..."
          className="border p-2 rounded-md text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border p-2 rounded-md text-sm"
        >
          <option value="all">Tous les rôles</option>
          <option value="user">Utilisateur</option>
          <option value="assistant">IA</option>
        </select>
        <input
          type="date"
          className="border p-2 rounded-md text-sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filtered.map((msg) => (
          <Card key={msg.id} className="border">
            <CardContent className="p-4 text-sm">
              <p className="text-gray-500 text-xs mb-1">{new Date(msg.created_at).toLocaleString()}</p>
              <p className={`mb-1 font-semibold ${msg.role === "user" ? "text-gray-700" : "text-indigo-700"}`}>
                {msg.role === "user" ? "👤 Utilisateur" : "🤖 IA"} :
              </p>
              <p className="text-gray-800 whitespace-pre-line">{msg.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    <section className="mt-10" id="graphZone">
  <h2 className="text-lg font-semibold mb-4">📊 Volume de messages IA par jour</h2>
  <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold">📊 Volume de messages IA par jour</h2>
      <button
        className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
        onClick={() => {
          const table = document.getElementById("iaVolumeChart") as HTMLCanvasElement;
          const link = document.createElement("a");
          link.href = table.toDataURL("image/png");
          link.download = "volume-messages-ia.png";
          link.click();
        }}
        }}
      >
        📥 Exporter en image
      </button>
      <button
        className="text-sm bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 ml-2"
        onClick={() => {
          const data = Array.from(document.querySelectorAll(".message-date"))
            .map((el) => el.textContent?.split("T")[0])
            .filter(Boolean) as string[];

          const counts: Record<string, number> = {};
          data.forEach((d) => (counts[d] = (counts[d] || 0) + 1));

          const csv = "Date,Messages
" + Object.entries(counts).map(([d, c]) => `${d},${c}`).join("
");
          const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "volume-messages-ia.csv");
          link.click();
        }}
      >
        📤 Exporter en CSV
      </button>
    </div>
    <div className="bg-white border p-4 rounded-md">
    <div className="flex items-center justify-end mb-4">
      <select id="rangeSelector" className="border p-1 rounded text-sm">
        <option value="7">7 derniers jours</option>
        <option value="30">30 derniers jours</option>
        <option value="all">Tout</option>
      </select>
    </div>
    <canvas id="iaVolumeChart" height="280"></canvas>
  </div>
</section>

<script>
  window.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("iaVolumeChart")?.getContext("2d");
    if (!ctx) return;

    const range = document.getElementById("rangeSelector")?.value || "all";
    const grouped = {};
    document.querySelectorAll(".message-date").forEach((el) => {
      const dateStr = el.textContent;
      const date = new Date(dateStr);
      const today = new Date();
      const diff = (today - date) / (1000 * 60 * 60 * 24);
      if (range === "all" || (range === "7" && diff <= 7) || (range === "30" && diff <= 30)) {
        const key = dateStr.split("T")[0];
        grouped[key] = (grouped[key] || 0) + 1;
      }
    });

    const labels = Object.keys(grouped);
    const data = Object.values(grouped);

    new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Messages IA / jour',
          data,
          backgroundColor: 'rgba(99, 102, 241, 0.5)',
          borderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  });
  document.getElementById("rangeSelector")?.addEventListener("change", () => window.location.reload());
</script>
</main>
  );
}
