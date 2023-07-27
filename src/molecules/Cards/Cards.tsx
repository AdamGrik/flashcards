import React from "react";
import "./Cards.scss";
import Card from "../../atoms/Card/Card";
type CardProps = {
  data: CardsData[];
};

type CardsData = {
  id: number;
  name: string;
  description: string;
  author: string;
  dateCreated: Date;
};

const Cards = (props: CardProps) => {
  const { data } = props;
  console.log(data);

  return (
    <div className="fc-cards">
      {data.map((card, i) => (
        <Card
          key={i}
          title={card.name}
          description={card.description}
          author={card.author}
          dateCreated={card.dateCreated}
        />
      ))}
    </div>
  );
};

export default Cards;
