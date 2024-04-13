import React, { ChangeEvent } from "react";
import "./NumberInput.scss";

type NumberInputProps = {
  value: number;
  change: (value: number) => void;
  min?: number;
  max?: number;
  id?: string;
};

const NumberInput = (props: NumberInputProps) => {
  const { value, min, max, id, change } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    change(value);
  };

  return (
    <input
      className="fc-number-input"
      type="number"
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      id={id}
    />
  );
};

export default NumberInput;
