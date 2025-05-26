import type { MaintenanceRecord } from "../types/maintenance";
import { isPastDue } from "./dateUtils";

export const sendReminder = (record: MaintenanceRecord): MaintenanceRecord => {
  return {
    ...record,
    reminderSent: true,
    reminderDate: new Date().toISOString(),
  };
};

export const getPendingReminders = (
  records: MaintenanceRecord[]
): MaintenanceRecord[] => {
  return records.filter(
    (r) => !r.reminderDate && !r.paidOn && isPastDue(r.dueDate)
  );
};
