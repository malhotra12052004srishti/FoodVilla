import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div key={index} className="h-60 w-60 bg-gray-200 m-5 p-5 rounded-lg">
            {" "}
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
