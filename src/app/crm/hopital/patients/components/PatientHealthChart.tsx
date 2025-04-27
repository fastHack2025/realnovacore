"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function PatientHealthChart({ data }: { data: any }) {
  const chartData = {
    labels: data.map((p: any) => p.nom),
    datasets: [
      {
        label: "Score Santé IA",
        data: data.map((p: any) => p.score || 50),
        backgroundColor: "#6366f1",
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-8">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">📈 État de Santé (IA)</h3>
      <Bar data={chartData} height={200} />
    </div>
  );
}
