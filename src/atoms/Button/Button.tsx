import React from "react";
import "./Button.scss";
import classNames from "classnames";

type ButtonProps = {
  title: string;
  id?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
};

const Button = (props: ButtonProps) => {
  const { title, onClick, id, disabled } = props;

  const className = classNames("fc-button", {
    [`fc-button-${id}`]: id !== undefined,
  });

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
export default Button;
