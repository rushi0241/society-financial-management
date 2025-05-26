export interface Payment {
  id: number;
  familyId: number;
  month: string;
  amount: number;
  isPaid: boolean;
  paidOn?: string;
  fine?: number;
}
