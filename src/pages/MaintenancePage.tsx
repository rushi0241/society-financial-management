import { useState } from "react";
import Search from "../components/layouts/Search";
import MaintenanceList from "../components/maintenance/MaintenanceList";

const MaintenancePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>Monthly Maintenance</h2>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <MaintenanceList searchTerm={searchTerm} />
    </>
  );
};

export default MaintenancePage;
