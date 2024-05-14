import React, { useState } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const { isChecked, onChange } = props;
  const handleChange = () => {
    onChange(!isChecked);
  };
  return (
    <>
      <span className="checkbox-wrapper" onClick={handleChange}>
        <input
          type="checkbox"
          checked={isChecked}
          id="cbx"
          onChange={handleChange}></input>
        <label className="toggle">
          <span className="ball"></span>
        </label>
      </span>
    </>
  );
};
export default Checkbox;
