"use client";

import { Input } from "@/components/ui/input";

export default function PatientSearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="mb-6">
      <Input
        placeholder="🔎 Rechercher un patient..."
        onChange={(e) => onSearch(e.target.value)}
        className="max-w-md"
      />
    </div>
  );
}
