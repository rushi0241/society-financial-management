import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </div>
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <h2>eSociety</h2>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }: { isActive: boolean }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-speedometer"></i> Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/families"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-people-fill"></i> Families
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/maintenance"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-hammer"></i> Maintenance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/reminders"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-alarm-fill"></i> Reminders
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
