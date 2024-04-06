import React, { useEffect, useState } from "react";
import "./NumberInput.scss";

type NumberInputProps = {
  value: number;
  onChange: (e: any) => void;
  min?: number;
  max?: number;
  id?: string;
};

const NumberInput = (props: NumberInputProps) => {
  const { value, onChange, min, max, id } = props;

  return (
    <input
      className="fc-number-input"
      type="number"
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      id={id}
    />
  );
};

export default NumberInput;
