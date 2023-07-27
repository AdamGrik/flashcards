import React from "react";
import "./Button.scss";

type ButtonProps = {
  title: string;
};

const Button = (props: ButtonProps) => {
  const { title } = props;

  return <button className="fc-button">{title}</button>;
};

export default Button;
