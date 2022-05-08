import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return (
      <div className="vh-100 vw-100  d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
