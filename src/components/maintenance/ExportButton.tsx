import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useGetFamiliesQuery } from "../../app/services/familyApi";
import type { MaintenanceRecord } from "../../types/maintenance";

const ExportButton = () => {
  const { data: families = [] } = useGetFamiliesQuery();
  const allRecords = families.flatMap((family: any) =>
    family.maintenanceRecords.map((r: MaintenanceRecord) => ({
      ...r,
      familyName: family.name,
      apartment: family.apartment,
      familyId: family.id,
      reminderDate: r.reminderDate ?? null,
    }))
  );
  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(allRecords);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, "maintenanceList.xlsx");
  };

  return <button onClick={handleExport}>📥 Export Excel</button>;
};

export default ExportButton;
