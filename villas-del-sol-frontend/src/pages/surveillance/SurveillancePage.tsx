import MainLayout from "../../components/layout/MainLayout";

import SurveillanceStats from "../../components/surveillance/SurveillanceStats";

import CamerasPanel from "../../components/surveillance/CamerasPanel";

import SurveillanceEventsTable from "../../components/surveillance/SurveillanceEventsTable";

import {
  mockCameras,
  mockSurveillanceEvents,
} from "../../utils/mockSurveillance";

export default function SurveillancePage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Vigilancia y Monitoreo
          </h1>

          <p className="text-slate-400 mt-3">
            Centro de monitoreo,
            cámaras y eventos de seguridad.
          </p>
        </div>

        <SurveillanceStats />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <SurveillanceEventsTable
              events={
                mockSurveillanceEvents
              }
            />
          </div>

          <CamerasPanel
            cameras={mockCameras}
          />
        </div>
      </div>
    </MainLayout>
  );
}