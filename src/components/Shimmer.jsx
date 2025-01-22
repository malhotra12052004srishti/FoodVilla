import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="restraunt-list">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
