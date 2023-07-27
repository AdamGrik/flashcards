import React from "react";
import "./Card.scss";

type CardProps = {
  title: string;
  description: string;
  author: string;
  dateCreated: Date;
};

const Card = (props: CardProps) => {
  const { title, description, author, dateCreated } = props;

  return (
    <div className="fc-card">
      <div>
        <div className="fc-card-title">{title}</div>
        <div className="fc-card-desc">{description}</div>
      </div>
      <div className="fc-card-footer">
        <div>
          by <span className="fc-card-footer-author">{author}</span>
        </div>
        <div>{dateCreated.toDateString()}</div>
      </div>
    </div>
  );
};

export default Card;
