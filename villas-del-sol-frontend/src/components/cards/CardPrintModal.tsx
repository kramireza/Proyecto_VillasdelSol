import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

interface Props {
  open: boolean;

  onClose: () => void;
}

export default function CardPrintModal({
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
            Reimpresión de Carnet
          </h2>

          <div className="space-y-6">

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

              <p className="text-white">
                Se registrará una nueva impresión en el historial del carnet.
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
                Imprimir
              </button>

            </div>

          </div>

        </DialogPanel>

      </div>
    </Dialog>
  );
}