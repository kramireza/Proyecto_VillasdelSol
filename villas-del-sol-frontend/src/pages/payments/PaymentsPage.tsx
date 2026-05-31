import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../../components/layout/MainLayout";

import PaymentsStats from "../../components/payments/PaymentsStats";

import PaymentsFilters from "../../components/payments/PaymentsFilters";

import PaymentsTable from "../../components/payments/PaymentsTable";

import { mockPayments } from "../../utils/mockPayments";

export default function PaymentsPage() {
  const [search, setSearch] =
    useState("");

  const filteredPayments =
    useMemo(() => {
      return mockPayments.filter(
        (payment) =>
          payment.residentName
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
            Gestión Financiera
          </h1>

          <p className="text-slate-400 mt-3">
            Administración de pagos,
            facturación y mora.
          </p>
        </div>

        <PaymentsStats />

        <PaymentsFilters
          search={search}
          onSearchChange={setSearch}
        />

        <PaymentsTable
          payments={filteredPayments}
        />
      </div>
    </MainLayout>
  );
}