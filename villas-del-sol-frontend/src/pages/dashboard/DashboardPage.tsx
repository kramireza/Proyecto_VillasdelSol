import MainLayout from "../../components/layout/MainLayout";

import DashboardStats from "../../components/dashboard/DashboardStats";

import RecentAccessTable from "../../components/dashboard/RecentAccessTable";

import AccessChart from "../../components/dashboard/AccessChart";

import AlertsPanel from "../../components/dashboard/AlertsPanel";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard General
          </h1>

          <p className="text-slate-400 mt-3">
            Monitoreo administrativo y operativo
            en tiempo real.
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AccessChart />
          </div>

          <AlertsPanel />
        </div>

        <RecentAccessTable />
      </div>
    </MainLayout>
  );
}