import { Link, useLocation } from "react-router-dom";

/*
  404 Page – No Header/Navbar included
*/
function NotFound() {
  const location = useLocation();

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-danger">404</h1>
      <h4>Page Not Found</h4>

      <p className="text-muted">
        Invalid URL: <strong>{location.pathname}</strong>
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
