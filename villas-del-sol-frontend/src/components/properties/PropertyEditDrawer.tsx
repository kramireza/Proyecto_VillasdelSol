import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

import type {
  Property,
} from "../../types/property";

interface Props {
  open: boolean;

  property: Property | null;

  onClose: () => void;
}

export default function PropertyEditDrawer({
  open,
  property,
  onClose,
}: Props) {
  if (!property) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/60" />

      <div className="fixed inset-0 flex justify-end">
        <DialogPanel className="w-full max-w-2xl bg-slate-900 h-full overflow-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                Editar Propiedad
              </h2>

              <button
                onClick={onClose}
                className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-xl"
              >
                Cerrar
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block mb-2">
                  Nombre
                </label>

                <input
                  defaultValue={property.name}
                  className="w-full h-12 bg-slate-950 border border-slate-700 rounded-xl px-4"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Bloque
                </label>

                <input
                  defaultValue={property.block}
                  className="w-full h-12 bg-slate-950 border border-slate-700 rounded-xl px-4"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Estado
                </label>

                <select className="w-full h-12 bg-slate-950 border border-slate-700 rounded-xl px-4">
                  <option>
                    ACTIVE
                  </option>

                  <option>
                    INACTIVE
                  </option>
                </select>
              </div>

              <button
                type="button"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}