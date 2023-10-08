import React from "react";
import "./Button.scss";

type ButtonProps = {
  title: string;
  onClick?: (e: any) => void;
  classname?: string;
};

const Button = (props: ButtonProps) => {
  const { title, onClick, classname } = props;

  return (
    <button className={"fc-button "} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
