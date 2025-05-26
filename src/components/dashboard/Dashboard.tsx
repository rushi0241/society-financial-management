import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useGetFamiliesQuery } from "../../app/services/familyApi";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data: families = [] } = useGetFamiliesQuery();
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
  return (
    <div className="dashboard-layout">
      <div className="summary">
        <div className="card" onClick={() => navigate("/families")}>
          <span>{families.length}</span> Total Families
        </div>
        <div className="card" onClick={() => navigate("/defaulters")}>
          <span>5</span> Defaulters This Month
        </div>
        <div
          className="card maintenance"
          onClick={() => navigate("/maintenance")}
        >
          Make monthly maintenance payment by the <span>10</span>
          <sup>th</sup> or <span>15</span>
          <sup>th</sup> of the month <span>{currentMonthName}</span>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
