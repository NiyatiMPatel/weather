import React from "react";
const Detail = ({ value, description }) => {
  return (
    <>
      <p>{value}</p>
      <span>{description}</span>
    </>
  );
};

export default Detail;
