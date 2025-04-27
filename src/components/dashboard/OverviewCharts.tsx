"use client";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", rdv: 30, paiements: 20 },
  { name: "Feb", rdv: 45, paiements: 25 },
  { name: "Mar", rdv: 60, paiements: 40 },
  { name: "Apr", rdv: 80, paiements: 50 },
  { name: "May", rdv: 100, paiements: 70 },
];

export default function OverviewCharts() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Statistiques générales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="rdv" stroke="#6366f1" strokeWidth={2} />
          <Line type="monotone" dataKey="paiements" stroke="#10b981" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
