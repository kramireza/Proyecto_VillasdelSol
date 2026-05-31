import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

import {
  useState,
} from "react";

import CardPreview from "./CardPreview";

import CardPrintPreview from "./CardPrintPreview";

import {
  mockResidentsForCards,
} from "../../utils/mockCardResidents";

interface Props {
  open: boolean;

  onClose: () => void;
}

export default function CardIssueWizard({
  open,
  onClose,
}: Props) {
  const [step, setStep] =
    useState(1);

  const [
    selectedResident,
    setSelectedResident,
  ] = useState(
    mockResidentsForCards[0]
  );

  const [
    pedestrianAccess,
    setPedestrianAccess,
  ] = useState(true);

  const [
    vehicleAccess,
    setVehicleAccess,
  ] = useState(false);

  const [rfidCode, setRfidCode] =
    useState("RFID-0001");

  const totalSteps = 8;

  function nextStep() {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
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
                  Emisión de Carnet
                </h2>

                <p className="text-slate-400 mt-2">
                  Paso {step} de {totalSteps}
                </p>
              </div>

              <button
                onClick={onClose}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl"
              >
                Cerrar
              </button>
            </div>

            <div className="flex gap-2">
              {Array.from({
                length: totalSteps,
              }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full ${
                    index + 1 <= step
                      ? "bg-amber-500"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            {/* PASO 1 */}

            {step === 1 && (
              <div className="space-y-6">

                <h3 className="text-2xl font-bold text-white">
                  Seleccionar Residente
                </h3>

                <select
                  className="w-full h-12 bg-slate-800 border border-slate-600 rounded-xl px-4 text-white"
                  onChange={(e) =>
                    setSelectedResident(
                      mockResidentsForCards[
                        Number(
                          e.target.value
                        )
                      ]
                    )
                  }
                >
                  {mockResidentsForCards.map(
                    (
                      resident,
                      index
                    ) => (
                      <option
                        key={index}
                        value={index}
                      >
                        {
                          resident.residentName
                        }
                      </option>
                    )
                  )}
                </select>

              </div>
            )}

            {/* PASO 2 */}

            {step === 2 && (
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-white mb-6">
                  Propiedad Asociada
                </h3>

                <div className="space-y-4">

                  <div>
                    <p className="text-slate-400">
                      Propiedad
                    </p>

                    <p className="text-white font-semibold">
                      {
                        selectedResident.property
                      }
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* PASO 3 */}

            {step === 3 && (
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-white mb-6">
                  Estado Financiero
                </h3>

                <div className="space-y-4">

                  <div>
                    <p className="text-slate-400">
                      Estado
                    </p>

                    <p
                      className={
                        selectedResident.balanceStatus ===
                        "CURRENT"
                          ? "text-green-400 font-semibold"
                          : "text-red-400 font-semibold"
                      }
                    >
                      {
                        selectedResident.balanceStatus
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Meses Pendientes
                    </p>

                    <p className="text-white">
                      {
                        selectedResident.pendingMonths
                      }
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* PASO 4 */}

            {step === 4 && (
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-2xl font-bold text-white mb-6">
                  Carnets Activos
                </h3>

                <p className="text-white text-lg">
                  {
                    selectedResident.activeCards
                  } carnet(s) activo(s)
                </p>

              </div>
            )}

            {/* PASO 5 */}

            {step === 5 && (
              <div className="space-y-6">

                <h3 className="text-2xl font-bold text-white">
                  Permisos del Carnet
                </h3>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6">

                  <label className="flex items-center gap-4 cursor-pointer">

                    <input
                      type="checkbox"
                      checked={
                        pedestrianAccess
                      }
                      onChange={() =>
                        setPedestrianAccess(
                          !pedestrianAccess
                        )
                      }
                    />

                    <span className="text-white">
                      Acceso Peatonal
                    </span>

                  </label>

                  <label className="flex items-center gap-4 cursor-pointer">

                    <input
                      type="checkbox"
                      checked={
                        vehicleAccess
                      }
                      onChange={() =>
                        setVehicleAccess(
                          !vehicleAccess
                        )
                      }
                    />

                    <span className="text-white">
                      Acceso Vehicular
                    </span>

                  </label>

                </div>

              </div>
            )}

            {/* PASO 6 */}

            {step === 6 && (
              <div className="space-y-6">

                <h3 className="text-2xl font-bold text-white">
                  Asignación RFID
                </h3>

                <input
                  value={rfidCode}
                  onChange={(e) =>
                    setRfidCode(
                      e.target.value
                    )
                  }
                  className="w-full h-12 bg-slate-800 border border-slate-600 rounded-xl px-4 text-white"
                />

              </div>
            )}

            {/* PASO 7 */}

            {step === 7 && (
              <CardPreview
                residentName={
                  selectedResident.residentName
                }
                property={
                  selectedResident.property
                }
                pedestrian={
                  pedestrianAccess
                }
                vehicle={
                  vehicleAccess
                }
                rfidCode={
                  rfidCode
                }
              />
            )}

            {/* PASO 8 */}

            {step === 8 && (
              <CardPrintPreview
                residentName={
                  selectedResident.residentName
                }
                property={
                  selectedResident.property
                }
                pedestrian={
                  pedestrianAccess
                }
                vehicle={
                  vehicleAccess
                }
                rfidCode={
                  rfidCode
                }
              />
            )}

            <div className="flex justify-between pt-6">

              <button
                disabled={step === 1}
                onClick={
                  previousStep
                }
                className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white px-6 py-3 rounded-xl"
              >
                Anterior
              </button>

              {step < totalSteps ? (
                <button
                  onClick={
                    nextStep
                  }
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl"
                >
                  Emitir Carnet
                </button>
              )}

            </div>

          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}