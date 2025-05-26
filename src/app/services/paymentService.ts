import type { Payment } from "../../types/Payment";
let payments: Payment[] = [];

export const getPayments = (): Promise<Payment[]> => {
  return Promise.resolve(payments);
};

export const addPayment = (payment: Payment): Promise<void> => {
  payments.push({ ...payment, id: Date.now() });
  return Promise.resolve();
};

export const getDefaulters = (month: string): Promise<Payment[]> => {
  return Promise.resolve(
    payments.filter((p) => p.month === month && !p.isPaid)
  );
};
