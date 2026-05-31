import MainLayout from "../../components/layout/MainLayout";

import AccessStats from "../../components/access/AccessStats";

import AccessEventsTable from "../../components/access/AccessEventsTable";

import DevicesPanel from "../../components/access/DevicesPanel";

import {
  mockAccessEvents,
  mockDevices,
} from "../../utils/mockAccess";

export default function AccessPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Control de Accesos
          </h1>

          <p className="text-slate-400 mt-3">
            Monitoreo RFID, QR,
            torniquetes y eventos
            operativos.
          </p>
        </div>

        <AccessStats />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AccessEventsTable
              events={mockAccessEvents}
            />
          </div>

          <DevicesPanel
            devices={mockDevices}
          />
        </div>
      </div>
    </MainLayout>
  );
}