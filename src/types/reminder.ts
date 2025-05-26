export interface Reminder {
  familyId: number;
  familyName: string;
  month: string;
  dueDate: string;
  paidOn: string | null;
  reminderSent: boolean;
  reminderDate: string | null;
  apartment: string;
  amountPaid: number;
  fine: number;
}
