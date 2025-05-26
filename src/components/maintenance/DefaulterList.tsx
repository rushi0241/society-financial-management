import { useGetFamiliesQuery } from "../../app/services/familyApi";
import type { MaintenanceRecord } from "../../types/maintenance";
import { Table } from "react-bootstrap";

const DefaulterList = () => {
  const { data: families = [], isLoading, error } = useGetFamiliesQuery();

  const currentMonth = new Date().toISOString().slice(0, 7); // e.g. "2025-05"

  const defaulters = families.flatMap((family: any) =>
    family.maintenanceRecords
      .filter((r: MaintenanceRecord) => {
        const isThisMonth = r.month === currentMonth;
        const isDefaulter =
          !r.paidOn || new Date(r.paidOn) > new Date(r.dueDate);
        return isThisMonth && isDefaulter;
      })
      .map((r: MaintenanceRecord) => ({
        ...r,
        familyName: family.name,
        apartment: family.apartment,
      }))
  );

  if (isLoading) return <p>Loading defaulters...</p>;
  if (error) return <p>Failed to load data.</p>;

  return defaulters.length === 0 ? (
    <p>No defaulters this month 🎉</p>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Apartment</th>
          <th>Due Date</th>
          <th>Paid On</th>
          <th>Fine</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {defaulters.map((d, idx) => (
          <tr key={idx}>
            <td>{d.familyName}</td>
            <td>{d.apartment}</td>
            <td>{d.dueDate}</td>
            <td>{d.paidOn ?? "-"}</td>
            <td>₹{d.fine}</td>
            <td>{!d.paidOn ? "Unpaid" : "Late"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DefaulterList;
