import React from "react";
import "./PrimaryHeading.css";

const PrimaryHeading = ({ title }) => {
  return (
    <div className="ph-1 text-center my-5">
      <h2 className="fs-1 pb-3">{title}</h2>
    </div>
  );
};

export default PrimaryHeading;
