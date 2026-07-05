import InvoiceStats from "../InvoiceStats";
import InvoiceFilters from "../InvoiceFilters";
import InvoiceTable from "../InvoiceTable";

import type { Invoice } from "../../../types";

type Props = {
  search: string;
  invoices: Invoice[];
  onSearchChange: (value: string) => void;

  onNewInvoice: () => void;

  onView: (invoice: Invoice) => void;

  onEdit: (invoice: Invoice) => void;

  onPrint: (invoice: Invoice) => void;
};

export default function InvoicesTab({
  search,
  invoices,
  onSearchChange,
  onNewInvoice,
  onView,
  onEdit,
  onPrint,
}: Props) {
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={onNewInvoice}
          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl"
        >
          Nueva Factura
        </button>
      </div>

      <InvoiceStats />

      <InvoiceFilters
        search={search}
        onSearchChange={onSearchChange}
      />

      <InvoiceTable
        invoices={invoices}
        onView={onView}
        onEdit={onEdit}
        onPrint={onPrint}
      />
    </>
  );
}