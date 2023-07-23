import React from "react";
import "./Button.scss";

type Button = {
  title: string;
};

const Button = (props: Button) => {
  const { title } = props;

  return <button className="fc-button">{title}</button>;
};

export default Button;
