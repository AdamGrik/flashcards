import React from "react";
import "./Button.scss";

type ButtonProps = {
  title: string;
  id?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
};

const Button = (props: ButtonProps) => {
  const { title, onClick, id, disabled } = props;

  return (
    <button
      className={`fc-button fc-button-${id}`}
      onClick={onClick}
      disabled={disabled}>
      {title}
    </button>
  );
};
export default Button;
