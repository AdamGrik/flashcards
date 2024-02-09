import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  link: string;
  author: string;
};

const Card = (props: CardProps) => {
  const { title, link, author } = props;

  return (
    <Link to={link} className="fc-card-link">
      <div className={`fc-card fc-card-${link}`}>
        <div>
          <div className={`fc-card-title fc-card-title-${link}`}>{title}</div>
          <div className="fc-card-author">Autor: {author}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
