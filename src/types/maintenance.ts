export interface MaintenanceRecord {
  reminderDate: any;
  familyName: string;
  apartment: string;
  familyId: number;
  month: string;
  amountPaid: number;
  dueDate: string;
  paidOn: string | null;
  fine: number;
  reminderSent?: boolean;
}
