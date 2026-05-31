import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

import {
  useState,
} from "react";

import type {
  Card,
} from "../../types/card";

import CardActionsPanel from "./CardActionsPanel";

import CardTimeline from "./CardTimeline";

import CardAuditPanel from "./CardAuditPanel";

import CardReplacementModal from "./CardReplacementModal";

import CardPrintModal from "./CardPrintModal";

import CardFinancialStatus from "./CardFinancialStatus";

import CardVehiclesPanel from "./CardVehiclesPanel";

import CardAccessStatus from "./CardAccessStatus";

interface Props {
  card: Card | null;

  open: boolean;

  onClose: () => void;
}

export default function CardDetailsDrawer({
  card,
  open,
  onClose,
}: Props) {
  const [
    replacementOpen,
    setReplacementOpen,
  ] = useState(false);

  const [
    printOpen,
    setPrintOpen,
  ] = useState(false);

  if (!card) return null;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" />

        <div className="fixed inset-0 flex justify-end">
          <DialogPanel className="w-full max-w-5xl bg-slate-900 border-l border-slate-700 h-full overflow-auto">

            <div className="p-8 space-y-8">

              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Detalle de Carnet
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {card.cardNumber}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl"
                >
                  Cerrar
                </button>

              </div>

              {/* INTEGRACIÓN FINANCIERA */}

              <CardFinancialStatus
                current={card.status === "ACTIVE"}
                pendingMonths={0}
              />

              {/* VEHÍCULOS */}

              <CardVehiclesPanel />

              {/* ESTADO OPERATIVO */}

              <CardAccessStatus
                active={card.status === "ACTIVE"}
              />

              {/* INFORMACIÓN */}

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white mb-6">
                  Información General
                </h3>

                <div className="grid grid-cols-2 gap-6">

                  <InfoItem
                    label="Residente"
                    value={card.residentName}
                  />

                  <InfoItem
                    label="Propiedad"
                    value={card.property}
                  />

                  <InfoItem
                    label="RFID"
                    value={card.rfidCode}
                  />

                  <InfoItem
                    label="Estado"
                    value={card.status}
                  />

                </div>

              </div>

              {/* PERMISOS */}

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white mb-6">
                  Permisos
                </h3>

                <div className="space-y-3">

                  {card.permissions.pedestrian && (
                    <div className="text-green-400 font-medium">
                      ✓ Acceso Peatonal
                    </div>
                  )}

                  {card.permissions.vehicle && (
                    <div className="text-green-400 font-medium">
                      ✓ Acceso Vehicular
                    </div>
                  )}

                </div>

              </div>

              {/* ACCIONES */}

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white mb-6">
                  Acciones Operativas
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                  <CardActionsPanel
                    status={card.status}
                  />

                  <button
                    onClick={() =>
                      setReplacementOpen(true)
                    }
                    className="bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-xl font-semibold"
                  >
                    Reposición
                  </button>

                  <button
                    onClick={() =>
                      setPrintOpen(true)
                    }
                    className="bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl"
                  >
                    Reimprimir
                  </button>

                </div>

              </div>

              {/* HISTORIAL */}

              <CardTimeline />

              {/* AUDITORÍA */}

              <CardAuditPanel />

            </div>

          </DialogPanel>
        </div>
      </Dialog>

      <CardReplacementModal
        open={replacementOpen}
        onClose={() =>
          setReplacementOpen(false)
        }
      />

      <CardPrintModal
        open={printOpen}
        onClose={() =>
          setPrintOpen(false)
        }
      />
    </>
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

      <p className="text-white font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}