import { sendReminder } from "../../utils/reminderUtils";
import { Button, Table } from "react-bootstrap";
import { useGetReminderQuery } from "../../app/services/reminderApi";

const ReminderScheduler = () => {
  const { data: reminders = [], isLoading, error } = useGetReminderQuery();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthName = monthNames[new Date().getMonth()];

  const handleSendReminder = (reminder: any) => {
    sendReminder(reminder);
  };

  const formatDueDate = (dateStr: string | null | undefined): string => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    const pad = (n: number) => n.toString().padStart(2, "0");

    const day = pad(date.getDate());
    const month = currentMonthName;
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    const formattedHours = pad(hours);

    return `${day} ${month} ${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
  };
  if (isLoading) return <p>Loading reminders...</p>;
  if (error) return <p>Failed to load reminders.</p>;
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Reminder Scheduler</h3>
      </div>

      <Table bordered striped hover>
        <thead
          style={{ position: "sticky", top: 0, backgroundColor: "#f8f9fa" }}
        >
          <tr>
            <th>Family</th>
            <th>Month</th>
            <th>Paid</th>
            <th>Reminder Sent</th>
            <th>Reminder Date</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((r) => (
            <tr key={r.familyId}>
              <td>{r.familyName}</td>
              <td>{r.month}</td>
              <td>{r.paidOn ?? "Not Paid"}</td>
              <td>{r.reminderSent ? "Yes" : "No"}</td>
              <td>{r.reminderDate ? formatDueDate(r.reminderDate) : "-"}</td>
              <td className="text-center">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleSendReminder(r)}
                  disabled={r.reminderSent}
                >
                  Send Reminder
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReminderScheduler;
