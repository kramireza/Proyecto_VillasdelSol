import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../../components/layout/MainLayout";

import PropertiesStats from "../../components/properties/PropertiesStats";

import PropertiesFilters from "../../components/properties/PropertiesFilters";

import PropertiesTable from "../../components/properties/PropertiesTable";

import PropertyDetailsDrawer from "../../components/properties/PropertyDetailsDrawer";

import PropertyFormDrawer from "../../components/properties/PropertyFormDrawer";

import {
  mockProperties,
} from "../../utils/mockProperties";

import type {
  Property,
} from "../../types/property";

export default function PropertiesPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedProperty,
    setSelectedProperty,
  ] = useState<Property | null>(
    null
  );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    formOpen,
    setFormOpen,
  ] = useState(false);

  const filteredProperties =
    useMemo(() => {
      return mockProperties.filter(
        (property) =>
          property.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          property.code
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [search]);

  function openDetails(
    property: Property
  ) {
    setSelectedProperty(
      property
    );

    setDetailsOpen(true);
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Propiedades
          </h1>

          <p className="text-slate-400 mt-3">
            Administración de casas,
            edificios, apartamentos y
            parqueos.
          </p>
        </div>

        <PropertiesStats />

        <PropertiesFilters
          search={search}
          onSearchChange={setSearch}
          onCreate={() =>
            setFormOpen(true)
          }
        />

        <PropertiesTable
          properties={
            filteredProperties
          }
          onSelectProperty={
            openDetails
          }
        />

        <PropertyDetailsDrawer
          property={
            selectedProperty
          }
          open={detailsOpen}
          onClose={() =>
            setDetailsOpen(false)
          }
        />

        <PropertyFormDrawer
          open={formOpen}
          onClose={() =>
            setFormOpen(false)
          }
        />
      </div>
    </MainLayout>
  );
}