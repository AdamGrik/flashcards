import React, { useState } from "react";

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
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}></input>
      {title}
    </>
  );
};
export default Checkbox;
