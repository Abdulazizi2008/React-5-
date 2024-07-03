import React from "react";

const MyInput = ({ setColor }) => {
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} placeholder="Enter a color" />
  );
};

export default MyInput;
