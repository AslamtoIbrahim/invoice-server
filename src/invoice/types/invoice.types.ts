export type BillFrom = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type BillTo = {
  name: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
  email: string;
};

export type Item = {
  name: string;
  qty: number;
  price: number;
  total: number;
  invoiceId: string | null;
};

export type Status = "PAID" | "PENDING" | "DRAFT" 
