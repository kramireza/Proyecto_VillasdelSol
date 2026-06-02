import { useMemo, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";

import PaymentsStats from "../../components/payments/PaymentsStats";
import PaymentsFilters from "../../components/payments/PaymentsFilters";
import PaymentsTable from "../../components/payments/PaymentsTable";

import FinancialDashboard from "../../components/payments/FinancialDashboard";

import InvoiceTable from "../../components/payments/InvoiceTable";
import InvoiceStats from "../../components/payments/InvoiceStats";
import InvoiceFilters from "../../components/payments/InvoiceFilters";
import InvoiceDetailsDrawer from "../../components/payments/InvoiceDetailsDrawer";
import InvoiceFormDrawer from "../../components/payments/InvoiceFormDrawer";
import InvoiceEditDrawer from "../../components/payments/InvoiceEditDrawer";
import InvoicePrintPreview from "../../components/payments/InvoicePrintPreview";

import ReceiptTable from "../../components/payments/ReceiptTable";

import AccountStatementDrawer from "../../components/payments/AccountStatementDrawer";

import FinancialHistoryTable from "../../components/payments/FinancialHistoryTable";

import { mockPayments } from "../../utils/mockPayments";

type Tab =
  | "dashboard"
  | "invoices"
  | "payments"
  | "receipts"
  | "statement"
  | "history";

type Invoice = {
  number: string;
  resident: string;
  amount: string;
  status: string;
};

const mockInvoices: Invoice[] = [
  {
    number: "FAC-0001",
    resident: "Carlos Mendoza",
    amount: "L 4,500",
    status: "Pendiente",
  },
  {
    number: "FAC-0002",
    resident: "Ana Flores",
    amount: "L 3,200",
    status: "Pagada",
  },
  {
    number: "FAC-0003",
    resident: "José Martínez",
    amount: "L 5,100",
    status: "Pendiente",
  },
];

export default function PaymentsPage() {
  const [activeTab, setActiveTab] =
    useState<Tab>("dashboard");

  const [search, setSearch] =
    useState("");

  const [invoiceSearch, setInvoiceSearch] =
    useState("");

  const [
    selectedInvoice,
    setSelectedInvoice,
  ] = useState<Invoice | null>(null);

  const [
    invoiceDrawerOpen,
    setInvoiceDrawerOpen,
  ] = useState(false);

  const [
    invoiceFormOpen,
    setInvoiceFormOpen,
  ] = useState(false);

  const [invoiceEditOpen, setInvoiceEditOpen] =
    useState(false);

  const [invoicePrintOpen, setInvoicePrintOpen] =
    useState(false);

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

  const filteredInvoices =
    useMemo(() => {
      return mockInvoices.filter(
        (invoice) =>
          invoice.resident
            .toLowerCase()
            .includes(
              invoiceSearch.toLowerCase()
            ) ||
          invoice.number
            .toLowerCase()
            .includes(
              invoiceSearch.toLowerCase()
            )
      );
    }, [invoiceSearch]);

  const handleViewInvoice = (
    invoice: Invoice
  ) => {
    setSelectedInvoice(invoice);
    setInvoiceDrawerOpen(true);
  };

  const handleEditInvoice = (
    invoice: Invoice
  ) => {
    setSelectedInvoice(invoice);
    setInvoiceEditOpen(true);
  };

  const handlePrintInvoice = (
    invoice: Invoice
  ) => {
    setSelectedInvoice(invoice);
    setInvoicePrintOpen(true);
  };

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

        <div className="flex flex-wrap gap-3">
          {[
            ["dashboard", "Dashboard"],
            ["invoices", "Facturas"],
            ["payments", "Pagos"],
            ["receipts", "Recibos"],
            ["statement", "Estado de Cuenta"],
            ["history", "Historial"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() =>
                setActiveTab(
                  key as Tab
                )
              }
              className={`px-4 py-2 rounded-xl ${
                activeTab === key
                  ? "bg-amber-500 text-black"
                  : "bg-slate-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <FinancialDashboard />
        )}

        {activeTab === "invoices" && (
          <>
            <div className="flex justify-end">
              <button
                onClick={() =>
                  setInvoiceFormOpen(
                    true
                  )
                }
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl"
              >
                Nueva Factura
              </button>
            </div>

            <InvoiceStats />

            <InvoiceFilters
              search={invoiceSearch}
              onSearchChange={
                setInvoiceSearch
              }
            />

            <InvoiceTable
              invoices={filteredInvoices}
              onView={handleViewInvoice}
              onEdit={handleEditInvoice}
              onPrint={handlePrintInvoice}
            />
          </>
        )}

        {activeTab === "payments" && (
          <>
            <PaymentsStats />

            <PaymentsFilters
              search={search}
              onSearchChange={
                setSearch
              }
            />

            <PaymentsTable
              payments={
                filteredPayments
              }
            />
          </>
        )}

        {activeTab === "receipts" && (
          <ReceiptTable />
        )}

        {activeTab === "statement" && (
          <AccountStatementDrawer />
        )}

        {activeTab === "history" && (
          <FinancialHistoryTable />
        )}
      </div>

      <InvoiceDetailsDrawer
        open={invoiceDrawerOpen}
        invoice={selectedInvoice}
        onClose={() =>
          setInvoiceDrawerOpen(false)
        }
      />

      <InvoiceFormDrawer
        open={invoiceFormOpen}
        onClose={() =>
          setInvoiceFormOpen(
            false
          )
        }
      />
      <InvoiceEditDrawer
        open={invoiceEditOpen}
        invoice={selectedInvoice}
        onClose={() =>
          setInvoiceEditOpen(false)
        }
      />

      <InvoicePrintPreview
        open={invoicePrintOpen}
        invoice={selectedInvoice}
        onClose={() =>
          setInvoicePrintOpen(false)
        }
      />
    </MainLayout>
  );
}