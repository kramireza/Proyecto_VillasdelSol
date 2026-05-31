import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

import {
  useState,
} from "react";

interface Props {
  open: boolean;

  onClose: () => void;
}

export default function PropertyFormDrawer({
  open,
  onClose,
}: Props) {
  const [step, setStep] =
    useState(1);

  const [type, setType] =
    useState<
      "HOUSE" | "BUILDING"
    >("HOUSE");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/70" />

      <div className="fixed inset-0 flex justify-end">
        <DialogPanel className="w-full max-w-4xl bg-slate-900 border-l border-slate-700 h-full overflow-auto">
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Nueva Propiedad
                </h2>

                <p className="text-slate-400 mt-2">
                  Paso {step} de 5
                </p>
              </div>

              <button
                onClick={onClose}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl"
              >
                Cerrar
              </button>
            </div>

            <ProgressBar step={step} />

            {step === 1 && (
              <StepPropertyType
                type={type}
                setType={setType}
              />
            )}

            {step === 2 && (
              <StepGeneralData />
            )}

            {step === 3 &&
              type ===
                "BUILDING" && (
                <StepApartments />
              )}

            {step === 4 && (
              <StepParking />
            )}

            {step === 5 && (
              <StepSummary
                type={type}
              />
            )}

            <div className="flex justify-between pt-6">
              <button
                disabled={step === 1}
                onClick={() =>
                  setStep(
                    step - 1
                  )
                }
                className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 px-6 py-3 rounded-xl"
              >
                Anterior
              </button>

              {step < 5 ? (
                <button
                  onClick={() =>
                    setStep(
                      step + 1
                    )
                  }
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
                >
                  Guardar Propiedad
                </button>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

function ProgressBar({
  step,
}: {
  step: number;
}) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map(
        (item) => (
          <div
            key={item}
            className={`h-2 flex-1 rounded-full ${
              item <= step
                ? "bg-amber-500"
                : "bg-slate-700"
            }`}
          />
        )
      )}
    </div>
  );
}

function StepPropertyType({
  type,
  setType,
}: {
  type:
    | "HOUSE"
    | "BUILDING";

  setType: (
    value:
      | "HOUSE"
      | "BUILDING"
  ) => void;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">
        Tipo de Propiedad
      </h3>

      <div className="grid grid-cols-2 gap-6">
        <button
          onClick={() =>
            setType("HOUSE")
          }
          className={`p-8 rounded-2xl border ${
            type === "HOUSE"
              ? "border-amber-500 bg-amber-500/10"
              : "border-slate-700 bg-slate-800"
          }`}
        >
          Casa
        </button>

        <button
          onClick={() =>
            setType(
              "BUILDING"
            )
          }
          className={`p-8 rounded-2xl border ${
            type ===
            "BUILDING"
              ? "border-amber-500 bg-amber-500/10"
              : "border-slate-700 bg-slate-800"
          }`}
        >
          Edificio
        </button>
      </div>
    </div>
  );
}

function StepGeneralData() {
  return (
    <div className="space-y-6">
      <Input
        label="Código"
      />

      <Input
        label="Nombre"
      />

      <Input
        label="Bloque"
      />

      <Input
        label="Observaciones"
      />
    </div>
  );
}

function StepApartments() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">
        Configuración de Apartamentos
      </h3>

      <Input
        label="Cantidad de Apartamentos"
      />
    </div>
  );
}

function StepParking() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">
        Configuración de Parqueos
      </h3>

      <Input
        label="Cantidad de Parqueos"
      />
    </div>
  );
}

function StepSummary({
  type,
}: {
  type:
    | "HOUSE"
    | "BUILDING";
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
      <h3 className="text-2xl font-bold text-white mb-6">
        Resumen
      </h3>

      <p>
        Tipo:
        {" "}
        {type}
      </p>

      <p className="text-slate-400 mt-2">
        Aquí posteriormente se mostrará el resumen real conectado al backend.
      </p>
    </div>
  );
}

function Input({
  label,
}: {
  label: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-slate-300">
        {label}
      </label>

      <input
        className="w-full h-12 bg-slate-800 border border-slate-600 rounded-xl px-4 text-white"
      />
    </div>
  );
}