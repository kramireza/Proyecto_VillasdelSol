export interface Invoice {
  id: number;
  number: string;
  resident: string;
  property: string;
  concept: string;
 subtotal: string;
  surcharge: string;
  total: string;
  amount: string;
  status: "Pendiente" | "Pagada" | "Anulada";
}

export interface Receipt {
  id: number;
  number: string;
  invoiceNumber: string;
  resident: string;
  amount: string;
  paymentMethod: string;
  paymentDate: string;
}
