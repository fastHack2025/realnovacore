"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "react-hot-toast";

import StatsCards from "@/components/dashboard/StatsCards";
import RecentRDVs from "@/components/dashboard/RecentRDVs";
import RecentPaiements from "@/components/dashboard/RecentPaiements";
import TopClients from "@/components/dashboard/TopClients";
import OverviewCharts from "@/components/dashboard/OverviewCharts";
import ExportButton from "@/components/dashboard/ExportButton";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        toast.error("Accès refusé. Connecte-toi d'abord 🔒");
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Chargement sécurisé du dashboard...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            🧠 Dashboard NovaCore
          </h1>
          <ExportButton />
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <OverviewCharts />
          <TopClients />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <RecentRDVs />
          <RecentPaiements />
        </div>
      </section>
    </main>
  );
}
