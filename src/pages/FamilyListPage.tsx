import { useState } from "react";
import FamilyList from "../components/families/FamilyList";
import Search from "../components/layouts/Search";

const FamilyListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>Families</h2>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <FamilyList searchTerm={searchTerm} />
    </>
  );
};

export default FamilyListPage;
