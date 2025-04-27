import StatsCards from "@/components/dashboard/StatsCards";
import OverviewCharts from "@/components/dashboard/OverviewCharts";
import AssistantIA from "@/components/AssistantIA";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Tableau de bord NovaCore 🚀
      </h1>

      <StatsCards />

      <OverviewCharts />

      <div className="fixed bottom-6 right-6 z-50">
        <AssistantIA />
      </div>
    </main>
  );
}
