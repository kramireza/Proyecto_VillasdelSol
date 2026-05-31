import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

interface Props {
  open: boolean;

  onClose: () => void;
}

export default function CardReplacementModal({
  open,
  onClose,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/70" />

      <div className="fixed inset-0 flex items-center justify-center">

        <DialogPanel className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Reposición de Carnet
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-slate-300">
                Nuevo RFID
              </label>

              <input
                className="w-full h-12 bg-slate-800 border border-slate-600 rounded-xl px-4 text-white"
                defaultValue="RFID-NEW-0001"
              />
            </div>

            <div className="bg-yellow-500/10 border border-yellow-600 rounded-xl p-4">

              <p className="text-yellow-300">
                El RFID anterior será desactivado automáticamente.
              </p>

            </div>

            <div className="flex justify-end gap-4">

              <button
                onClick={onClose}
                className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl text-white"
              >
                Cancelar
              </button>

              <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-3 rounded-xl">
                Generar Reposición
              </button>

            </div>

          </div>

        </DialogPanel>

      </div>
    </Dialog>
  );
}