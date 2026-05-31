import MainLayout from "../../components/layout/MainLayout";

import SecurityStats from "../../components/security/SecurityStats";

import AuditLogsTable from "../../components/security/AuditLogsTable";

import SecurityAlertsPanel from "../../components/security/SecurityAlertsPanel";

import {
  mockAuditLogs,
  mockSecurityAlerts,
} from "../../utils/mockSecurity";

export default function SecurityPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Seguridad y Auditoría
          </h1>

          <p className="text-slate-400 mt-3">
            Registro de actividades,
            eventos administrativos y
            auditoría del sistema.
          </p>
        </div>

        <SecurityStats />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AuditLogsTable
              logs={mockAuditLogs}
            />
          </div>

          <SecurityAlertsPanel
            alerts={
              mockSecurityAlerts
            }
          />
        </div>
      </div>
    </MainLayout>
  );
}