import { useState } from "react";
import { sendReminder } from "../../utils/reminderUtils";
import type { MaintenanceRecord } from "../../types/maintenance";
import { isPastDue } from "../../utils/dateUtils";
import { useGetFamiliesQuery } from "../../app/services/familyApi";
import "./MaintenanceList.scss";
import { Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  searchTerm: string;
}

const MaintenanceList = ({ searchTerm }: Props) => {
  const { data: families = [], isLoading, error } = useGetFamiliesQuery();
  const [reminders, setReminders] = useState<any[]>([]);
  console.log("reminders", reminders);
  const getStatus = (r: MaintenanceRecord) => {
    if (r.paidOn) return "Paid";
    if (isPastDue(r.dueDate)) return "Late";
    return "Pending";
  };
  const formatMonth = (monthStr: string): string => {
    const [year, month] = monthStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleString("en-IN", { month: "long", year: "numeric" });
  };

  const formatDueDate = (dateStr: string | null | undefined): string => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.toLocaleString("en-IN", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    return `${day} ${month} ${year}`;
  };
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(
    String(currentDate.getFullYear())
  );
  const [selectedMonth, setSelectedMonth] = useState(
    String(currentDate.getMonth() + 1).padStart(2, "0")
  );

  if (isLoading) return <p>Loading families...</p>;
  if (error) return <p>Failed to load families.</p>;
  const allRecords = families.flatMap((family: any) =>
    family.maintenanceRecords.map((r: MaintenanceRecord) => ({
      ...r,
      familyName: family.name,
      apartment: family.apartment,
      familyId: family.id,
      reminderDate: r.reminderDate ?? null,
    }))
  );
  const selectedMonthKey = `${selectedYear}-${selectedMonth}`;
  const filteredRecords = allRecords.filter(
    (r) =>
      r.month === selectedMonthKey &&
      (r.familyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.apartment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getStatus(r).toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 10 + i);
  const handleSendReminders = (record: MaintenanceRecord) => {
    if (getStatus(record) !== "Late") return;

    if (record.reminderDate) {
      toast.info("Reminder already sent.");
      return;
    }

    const updated = sendReminder(record) as any;
    record.reminderDate = updated.reminderDate;
    setReminders((prev) => [...prev, updated]);

    toast.success(
      `Reminder sent to ${record.familyName} (${
        record.apartment
      }) on ${new Date().toLocaleDateString("en-IN")}`
    );
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="d-flex gap-3 align-items-center mb-4 col-sm-6 col-lg-4">
        <label className="form-label mb-0">Month:</label>
        <select
          className="form-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Array.from({ length: 12 }, (_, i) => {
            const val = String(i + 1).padStart(2, "0");
            return (
              <option key={val} value={val}>
                {new Date(0, i).toLocaleString("en-IN", { month: "long" })}
              </option>
            );
          })}
        </select>
        <label className="form-label mb-0">Year:</label>
        <select
          className="form-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <h5 className="text-primary mb-3">
        Month: {formatMonth(selectedMonthKey)}
      </h5>
      {filteredRecords.length === 0 ? (
        <p className="text-muted">No records found for this month.</p>
      ) : (
        <Table bordered striped hover>
          <thead
            style={{ position: "sticky", top: 0, backgroundColor: "#f8f9fa" }}
          >
            <tr>
              <th style={{ width: "70px", textAlign: "center" }}>Sr. No.</th>
              <th>Name</th>
              <th>Apartment</th>
              <th>Due Date</th>
              <th>Paid On</th>
              <th>Amount</th>
              <th>Fine</th>
              <th>Reminder Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((r, i) => (
              <tr key={`${r.familyId}-${r.month}`}>
                <td className="text-center">{i + 1}</td>
                <td>{r.familyName}</td>
                <td>{r.apartment}</td>
                <td>{formatDueDate(r.dueDate)}</td>
                <td>{formatDueDate(r.paidOn)}</td>
                <td>₹{r.amountPaid.toLocaleString("en-IN")}</td>
                <td>₹{r.fine.toLocaleString("en-IN")}</td>
                <td>{r.reminderDate ? formatDueDate(r.reminderDate) : "-"}</td>
                <td>
                  <div className="reminder-container">
                    <span className={`status ${getStatus(r).toLowerCase()}`}>
                      {getStatus(r)}
                    </span>
                    {getStatus(r) === "Late" && (
                      <span
                        title="Send Reminder"
                        onClick={
                          r.reminderDate
                            ? undefined
                            : () => handleSendReminders(r)
                        }
                        style={{
                          cursor: r.reminderDate ? "not-allowed" : "pointer",
                          opacity: r.reminderDate ? 0.5 : 1,
                          pointerEvents: r.reminderDate ? "none" : "auto",
                        }}
                        aria-disabled={!!r.reminderDate}
                      >
                        <i className="bi bi-stopwatch"></i>
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default MaintenanceList;
