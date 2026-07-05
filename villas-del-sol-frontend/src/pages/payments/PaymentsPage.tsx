import { useMemo, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";

import DashboardTab from "../../components/payments/tabs/DashboardTab";
import PaymentsTab from "../../components/payments/tabs/PaymentsTab";
import InvoicesTab from "../../components/payments/tabs/InvoicesTab";
import ReceiptsTab from "../../components/payments/tabs/ReceiptTab";
import StatementTab from "../../components/payments/tabs/StatementTab";
import HistoryTab from "../../components/payments/tabs/HistoryTab";

import type {
  Receipt,
  Invoice,
  AccountStatementRow,
  FinancialHistory,
} from "../../types";

import ReceiptDetailsDrawer from "../../components/payments/ReceiptDetailsDrawer";
import ReceiptPrintPreview from "../../components/payments/ReceiptPrintPreview";

import { mockReceipts } from "../../utils/mockReceipts";

import InvoiceDetailsDrawer from "../../components/payments/InvoiceDetailsDrawer";
import InvoiceFormDrawer from "../../components/payments/InvoiceFormDrawer";
import InvoiceEditDrawer from "../../components/payments/InvoiceEditDrawer";
import InvoicePrintPreview from "../../components/payments/InvoicePrintPreview";

import { mockPayments } from "../../utils/mockPayments";
import { mockInvoices } from "../../utils/mockInvoices";
import { mockAccountStatement } from "../../utils/mockAccountStatement";
import { mockFinancialHistory } from "../../utils/mockFinancialHistory";

type Tab =
  | "dashboard"
  | "invoices"
  | "payments"
  | "receipts"
  | "statement"
  | "history";

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

  const [receiptSearch, setReceiptSearch] =
    useState("");

  const [
    selectedReceipt,
    setSelectedReceipt,
  ] = useState<Receipt | null>(null);

  const [
    receiptDrawerOpen,
    setReceiptDrawerOpen,
  ] = useState(false);

  const [
    receiptPrintOpen,
    setReceiptPrintOpen,
  ] = useState(false);
  
  const [statementSearch, setStatementSearch] =
    useState("");

  const [historySearch, setHistorySearch] =
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

    const filteredReceipts =
      useMemo(() => {
        return mockReceipts.filter(
          (receipt) =>
            receipt.resident
              .toLowerCase()
              .includes(
                receiptSearch.toLowerCase()
              ) ||
            receipt.number
              .toLowerCase()
              .includes(
                receiptSearch.toLowerCase()
              )
        );
      }, [receiptSearch]);

      const filteredAccountStatement =
        useMemo(() => {
          return mockAccountStatement.filter(
            (row) =>
              row.document
                .toLowerCase()
                .includes(
                  statementSearch.toLowerCase()
                ) ||
              row.concept
                .toLowerCase()
                .includes(
                  statementSearch.toLowerCase()
                ) ||
              row.month
                .toLowerCase()
                .includes(
                  statementSearch.toLowerCase()
                )
          );
        }, [statementSearch]);
      
      const filteredHistory =
        useMemo(() => {
          return mockFinancialHistory.filter(
            (item) =>
              item.resident
                .toLowerCase()
                .includes(
                  historySearch.toLowerCase()
                ) ||
              item.description
                .toLowerCase()
                .includes(
                  historySearch.toLowerCase()
                ) ||
              item.user
                .toLowerCase()
                .includes(
                  historySearch.toLowerCase()
                )
          );
        }, [historySearch]);

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

  const handleViewReceipt = (
    receipt: Receipt
  ) => {
    setSelectedReceipt(receipt);
    setReceiptDrawerOpen(true);
  };

  const handlePrintReceipt = (
    receipt: Receipt
  ) => {
    setSelectedReceipt(receipt);
    setReceiptPrintOpen(true);
  };

  const handleViewStatementInvoice = (
    row: AccountStatementRow
  ) => {
    const invoice =
      mockInvoices.find(
        (item) =>
          item.number === row.document
      );

    if (!invoice) return;

    setSelectedInvoice(invoice);

    setInvoiceDrawerOpen(true);
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
          <DashboardTab />
        )}

        {activeTab === "invoices" && (
          <InvoicesTab
            search={invoiceSearch}
            invoices={filteredInvoices}
            onSearchChange={setInvoiceSearch}
            onNewInvoice={() =>
              setInvoiceFormOpen(true)
            }
            onView={handleViewInvoice}
            onEdit={handleEditInvoice}
            onPrint={handlePrintInvoice}
          />
        )}

        {activeTab === "payments" && (
          <PaymentsTab
            search={search}
            payments={filteredPayments}
            onSearchChange={setSearch}
          />
        )}

        {activeTab === "receipts" && (
          <ReceiptsTab
            search={receiptSearch}
            receipts={filteredReceipts}
            onSearchChange={setReceiptSearch}
            onView={handleViewReceipt}
            onPrint={handlePrintReceipt}
          />
        )}

        {activeTab === "statement" && (
          <StatementTab
            search={statementSearch}
            onSearchChange={
              setStatementSearch
            }
            rows={
              filteredAccountStatement
            }
            onViewInvoice={
              handleViewStatementInvoice
            }
          />
        )}

        {activeTab === "history" && (
          <HistoryTab
            search={historySearch}
            history={filteredHistory}
            onSearchChange={setHistorySearch}
          />
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

      <ReceiptDetailsDrawer
        open={receiptDrawerOpen}
        receipt={selectedReceipt}
        onClose={() =>
          setReceiptDrawerOpen(false)
        }
      />

      <ReceiptPrintPreview
        open={receiptPrintOpen}
        receipt={selectedReceipt}
        onClose={() =>
          setReceiptPrintOpen(false)
        }
      />
    </MainLayout>
  );
}