import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Button, Form } from "react-bootstrap";

const LoginForm: React.FC = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.userName === "admin" && user.password === "admin@123") {
      localStorage.setItem("token", "demo-token");
      localStorage.setItem("username", user.userName);
      navigate("/dashboard");
    } else {
      setError("Please enter valid credentials");
    }
  };
  return (
    <div className="LoginForm">
      <h1>eSociety</h1>
      <Form onSubmit={handleLogin}>
        <h2 style={{ margin: "0" }}>User Login</h2>
        <Form.Group className="d-grid gap-1">
          {/* <Form.Label>Username</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Username"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="d-grid gap-1">
          <div className="password-container">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            {user.password && (
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </span>
            )}
          </div>
        </Form.Group>
        {error && <div className="error-message">{error}</div>}
        <Button
          className="btn btn-primary btn-lg"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
        <div style={{ display: "flex", gap: "5px", placeContent: "center" }}>
          <i className="bi bi-lock"></i>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
