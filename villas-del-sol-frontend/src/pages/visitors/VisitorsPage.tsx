import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../../components/layout/MainLayout";

import VisitorsStats from "../../components/visitors/VisitorsStats";

import VisitorsFilters from "../../components/visitors/VisitorsFilters";

import VisitorsTable from "../../components/visitors/VisitorsTable";

import { mockVisitors } from "../../utils/mockVisitors";

export default function VisitorsPage() {
  const [search, setSearch] =
    useState("");

  const filteredVisitors =
    useMemo(() => {
      return mockVisitors.filter(
        (visitor) =>
          visitor.visitorName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          visitor.residentName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [search]);

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Visitas y QR
          </h1>

          <p className="text-slate-400 mt-3">
            Administración de visitantes
            y códigos QR temporales.
          </p>
        </div>

        <VisitorsStats />

        <VisitorsFilters
          search={search}
          onSearchChange={setSearch}
        />

        <VisitorsTable
          visitors={filteredVisitors}
        />
      </div>
    </MainLayout>
  );
}