// src/components/DavyTrigger.tsx
"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import useVoiceTrigger from "@/lib/hooks/useVoiceTrigger";
import useSpeak from "@/lib/hooks/useSpeak";
import { exportChatToPDF } from "@/lib/utils/exportChatToPDF";

const DavyTrigger = () => {
  const [open, setOpen] = useState(false);
  const voiceTrigger = useVoiceTrigger();
  const speak = useSpeak();

  useEffect(() => {
    if (voiceTrigger) {
      setOpen(true);
      speak("Bonjour ! Je suis Davy. Comment puis-je vous assister aujourd'hui ?");
    }
  }, [voiceTrigger]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
          🧠 Parler à Davy
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Assistant IA – Davy 🤖</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <p>Vous pouvez parler ou taper votre demande.</p>
          <button
            onClick={exportChatToPDF}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            📄 Exporter conversation
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DavyTrigger;
