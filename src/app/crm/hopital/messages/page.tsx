"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

const supabase = createClient();

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from("messages").select("*, patients(nom)").order("created_at", { ascending: false });
      if (data) setMessages(data);
    };
    fetchMessages();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">📩 Messagerie Patient-Médecin</h2>
      {messages.map((msg) => (
        <Card key={msg.id}>
          <CardHeader>
            <CardTitle>💬 {msg.patients?.nom || "Patient inconnu"}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            🧑‍⚕️ {msg.medecin} : {msg.message}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
