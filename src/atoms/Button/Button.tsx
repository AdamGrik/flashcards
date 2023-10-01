import React from "react";
import "./Button.scss";

type ButtonProps = {
  title: string;
  onClick?: (e: any) => void;
};

const Button = (props: ButtonProps) => {
  const { title, onClick } = props;

  return (
    <button className="fc-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
