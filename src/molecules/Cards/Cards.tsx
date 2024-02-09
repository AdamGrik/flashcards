import React from "react";
import "./Cards.scss";
import Card from "../../atoms/Card/Card";
type CardProps = {
  data: CardsData[];
};

type CardsData = {
  name: string;
  link: string;
  author: string;
};

const Cards = (props: CardProps) => {
  const { data } = props;

  return (
    <div>
      <div className="fc-cards">
        {data.map((card, i) => (
          <Card
            key={i}
            title={card.name}
            link={card.link}
            author={card.author}
          />
        ))}
      </div>
      <div className="fc-school-photo"></div>
    </div>
  );
};

export default Cards;
