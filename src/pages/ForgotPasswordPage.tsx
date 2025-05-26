import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-4 border rounded-3"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h4 className="mb-3 text-center">Forgot Password</h4>
        {submitted ? (
          <div className="d-flex flex-column align-items-center">
            <Alert variant="success">
              Please click on below reset your password button.
            </Alert>
            <Link to="/reset-password" className="btn btn-primary btn-lg">
              Reset Password
            </Link>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email or Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Reset Link
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
