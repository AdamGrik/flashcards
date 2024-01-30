import React from "react";
import "./Button.scss";

type ButtonProps = {
  title: string;
  id?: string;
  onClick?: (e: any) => void;
};

const Button = (props: ButtonProps) => {
  const { title, onClick, id } = props;

  return (
    <button className={`fc-button fc-button-${id}`} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
