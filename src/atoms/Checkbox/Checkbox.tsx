import React, { useState } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  title: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const { title, isChecked, onChange } = props;
  const handleChange = () => {
    onChange(!isChecked);
  };
  return (
    <>
      <span className="checkbox-wrapper" onClick={handleChange}>
        <input type="checkbox" checked={isChecked} id="cbx"></input>
        <label className="toggle">
          <span className="ball"></span>
          <span className="title">{title}</span>
        </label>
      </span>
    </>
  );
};
export default Checkbox;
