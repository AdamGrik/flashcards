import React from "react";
import "./Cards.scss";
import Card from "../../atoms/Card/Card";
type CardProps = {
  data: CardsData[];
};

type CardsData = {
  name: string;
  description: string;
  link: string;
};

const Cards = (props: CardProps) => {
  const { data } = props;

  return (
    <div className="fc-cards">
      {data.map((card, i) => (
        <Card
          key={i}
          title={card.name}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Cards;
