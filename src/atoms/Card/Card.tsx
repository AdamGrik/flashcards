import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

const Card = (props: CardProps) => {
  const { title, description, link } = props;

  return (
    <Link to={link}>
      <div className="fc-card">
        <div>
          <div className="fc-card-title">{title}</div>
          <div className="fc-card-desc">{description}</div>
        </div>
        <div className="fc-card-footer"></div>
      </div>
    </Link>
  );
};

export default Card;
