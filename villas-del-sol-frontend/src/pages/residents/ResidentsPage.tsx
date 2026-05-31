import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../../components/layout/MainLayout";

import ResidentsStats from "../../components/residents/ResidentsStats";

import ResidentsFilters from "../../components/residents/ResidentsFilters";

import ResidentsTable from "../../components/residents/ResidentsTable";

import ResidentDetailsDrawer from "../../components/residents/ResidentDetailsDrawer";

import { mockResidents } from "../../utils/mockResidents";

import type { Resident } from "../../types/resident";

export default function ResidentsPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedResident,
    setSelectedResident,
  ] = useState<Resident | null>(
    null
  );

  const [
    drawerOpen,
    setDrawerOpen,
  ] = useState(false);

  const filteredResidents = useMemo(() => {
    return mockResidents.filter(
      (resident) =>
        resident.fullName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        resident.identityNumber.includes(
          search
        )
    );
  }, [search]);

  function handleSelectResident(
    resident: Resident
  ) {
    setSelectedResident(resident);

    setDrawerOpen(true);
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Residentes
          </h1>

          <p className="text-slate-400 mt-3">
            Administración general de
            residentes y viviendas.
          </p>
        </div>

        <ResidentsStats />

        <ResidentsFilters
          search={search}
          onSearchChange={setSearch}
        />

        <ResidentsTable
          residents={filteredResidents}
          onSelectResident={
            handleSelectResident
          }
        />

        <ResidentDetailsDrawer
          resident={selectedResident}
          open={drawerOpen}
          onClose={() =>
            setDrawerOpen(false)
          }
        />
      </div>
    </MainLayout>
  );
}