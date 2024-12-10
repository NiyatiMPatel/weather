import React from "react";

const Skeleton = ({ type, prefix, suffix }) => {
  return (
    <p>
      {prefix && `${prefix}: `}
      <span className={`skeleton ${type === "rec" ? "rec" : "sq"}`}></span>
      {suffix}
    </p>
  );
};

export default Skeleton;
