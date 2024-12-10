import React, { useState } from "react";

const Input = ({ type, placeholder, onChange }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="searchbar">
      <input
        type={type}
        placeholder={placeholder}
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
