import React from "react";

export const CustomSpinner = ({ visible }) => {
  return <div className={visible ? "spinner spinner_activate" : "spinner"}></div>;
};
