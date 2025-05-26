import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
const App: React.FC = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/reset-password";
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        height: "100vh",
      }}
    >
      {!isLoginPage && <Sidebar />}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {!isLoginPage && <Header />}
        <main
          style={{
            height: "100vh",
            overflowY: "auto",
            width: "100%",
            margin: !isLoginPage ? "1rem 0" : undefined,
          }}
        >
          <div
            style={
              !isLoginPage ? { padding: "0 1rem", height: "100%" } : undefined
            }
          >
            <AppRoutes />
          </div>
        </main>
        {!isLoginPage && <Footer />}
      </div>
    </div>
  );
};

export default App;
