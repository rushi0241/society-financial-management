import type { MaintenanceRecord } from "./maintenance";

export interface Family {
  id: number;
  name: string;
  apartment: string;
  members: number;
  maintenanceRecords: MaintenanceRecord[];
}
