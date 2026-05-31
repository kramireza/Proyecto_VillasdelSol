import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

import {
  useState,
} from "react";

import type {
  Property,
} from "../../types/property";

import ParkingGrid from "./ParkingGrid";

import ApartmentsTable from "./ApartmentsTable";

import PropertyEditDrawer from "./PropertyEditDrawer";

interface Props {
  property: Property | null;

  open: boolean;

  onClose: () => void;
}

export default function PropertyDetailsDrawer({
  property,
  open,
  onClose,
}: Props) {
  const [editOpen, setEditOpen] =
    useState(false);

  if (!property) return null;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60" />

        <div className="fixed inset-0 flex justify-end">
          <DialogPanel className="w-full max-w-5xl bg-slate-900 border-l border-slate-800 h-full overflow-auto">
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {property.name}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {property.code}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setEditOpen(true)
                    }
                    className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold"
                  >
                    Editar
                  </button>

                  <button
                    onClick={onClose}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl"
                  >
                    Cerrar
                  </button>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información General
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <InfoItem
                    label="Tipo"
                    value={property.type}
                  />

                  <InfoItem
                    label="Bloque"
                    value={property.block}
                  />

                  <InfoItem
                    label="Estado"
                    value={property.status}
                  />

                  <InfoItem
                    label="Parqueos"
                    value={`${property.occupiedParkingSpaces}/${property.parkingSpaces}`}
                  />
                </div>
              </div>

              {property.apartments &&
                property.apartments.length >
                  0 && (
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                    <ApartmentsTable
                      apartments={
                        property.apartments
                      }
                    />
                  </div>
                )}

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Gestión de Parqueos
                  </h3>

                  <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold">
                    Nuevo Parqueo
                  </button>
                </div>

                <ParkingGrid
                  parkingSpaces={
                    property.parkingData ||
                    []
                  }
                />
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Relación con el Sistema
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <RelationCard
                    title="Residentes"
                    value="3 residentes asociados"
                  />

                  <RelationCard
                    title="Vehículos"
                    value="4 vehículos registrados"
                  />

                  <RelationCard
                    title="Carnets"
                    value="6 carnets activos"
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <PropertyEditDrawer
        open={editOpen}
        property={property}
        onClose={() =>
          setEditOpen(false)
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

      <p className="font-semibold text-white mt-2">
        {value}
      </p>
    </div>
  );
}

function RelationCard({
  title,
  value,
}: {
  title: string;

  value: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <p className="text-white font-semibold mt-3">
        {value}
      </p>
    </div>
  );
}