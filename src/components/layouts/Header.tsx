import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const capitalizeFirst = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const usernameRaw = localStorage.getItem("username") || "Guest";
  const username = capitalizeFirst(usernameRaw);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <header>
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center gap-2 justify-content-center ms-3">
          <p className="m-0">
            <i className="bi bi-person-circle"></i> {username}
          </p>
          <Button variant="outline-primary" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
