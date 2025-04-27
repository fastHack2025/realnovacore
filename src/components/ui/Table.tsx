"use client";

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full text-sm text-left">
        {children}
      </table>
    </div>
  );
}
