import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

import type {
  Resident,
  Vehicle,
  Card,
  AccessLog,
} from "../../types/resident";

interface Props {
  resident: Resident | null;

  open: boolean;

  onClose: () => void;
}

export default function ResidentDetailsDrawer({
  resident,
  open,
  onClose,
}: Props) {
  if (!resident) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/60" />

      <div className="fixed inset-0 flex justify-end">
        <DialogPanel className="w-full max-w-3xl bg-slate-900 border-l border-slate-800 h-full overflow-auto">
          <div className="p-8 space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  {resident.fullName}
                </h2>

                <p className="text-slate-400 mt-2">
                  Bloque {resident.block} -
                  Casa {resident.houseNumber}
                </p>
              </div>

              <button
                onClick={onClose}
                className="bg-slate-800 hover:bg-slate-700 transition px-4 py-2 rounded-xl"
              >
                Cerrar
              </button>
            </div>

            <ResidentInfo resident={resident} />

            <VehiclesSection
              vehicles={
                resident.vehiclesData || []
              }
            />

            <CardsSection
              cards={
                resident.cardsData || []
              }
            />

            <AccessLogsSection
              logs={
                resident.accessLogs || []
              }
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

function ResidentInfo({
  resident,
}: {
  resident: Resident;
}) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-6">
        Información General
      </h3>

      <div className="grid grid-cols-2 gap-6">
        <InfoItem
          label="Identidad"
          value={resident.identityNumber}
        />

        <InfoItem
          label="Teléfono"
          value={resident.phone}
        />

        <InfoItem
          label="Correo"
          value={resident.email}
        />

        <InfoItem
          label="Tipo"
          value={resident.residentType}
        />

        <InfoItem
          label="Estado Financiero"
          value={resident.financialStatus}
        />
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;

  value: string;
}) {
  return (
    <div>
      <p className="text-slate-400 text-sm">
        {label}
      </p>

      <p className="font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}

function VehiclesSection({
  vehicles,
}: {
  vehicles: Vehicle[];
}) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-6">
        Vehículos
      </h3>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border border-slate-800 rounded-xl p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  {vehicle.plate}
                </p>

                <p className="text-slate-400 text-sm mt-1">
                  {vehicle.brand}{" "}
                  {vehicle.model}
                </p>
              </div>

              <span className="text-slate-400 text-sm">
                {vehicle.color}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardsSection({
  cards,
}: {
  cards: Card[];
}) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-6">
        Carnets RFID
      </h3>

      <div className="space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-slate-800 rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">
                {card.code}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                {card.type}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                card.status === "ACTIVE"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {card.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccessLogsSection({
  logs,
}: {
  logs: AccessLog[];
}) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-2xl font-bold mb-6">
        Historial de Accesos
      </h3>

      <div className="space-y-4">
        {logs.map((log) => (
          <div
            key={log.id}
            className="border border-slate-800 rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">
                {log.accessType}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                {log.timestamp}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                log.result ===
                "AUTHORIZED"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {log.result}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}