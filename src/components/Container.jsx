import React from "react";

const Container = ({ color }) => {
  const containerStyle = {
    backgroundColor: color,
    width: "100%",
    height: "300px",
    transition: "background-color 0.3s",
  };

  return <div style={containerStyle}></div>;
};

export default Container;
