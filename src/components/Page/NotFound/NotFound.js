import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center py-5">
            <p className="fs-1">
              {" "}
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="btn btn-danger">
              Go Home
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid"
              src="https://i.ibb.co/h17BnN0/404.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
