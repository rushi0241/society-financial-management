import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 w-100">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4 mb-3">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/dashboard" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
