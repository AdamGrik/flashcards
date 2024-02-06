import React from "react";
import "./Cards.scss";
import Card from "../../atoms/Card/Card";
type CardProps = {
  data: CardsData[];
};

type CardsData = {
  name: string;
  link: string;
};

const Cards = (props: CardProps) => {
  const { data } = props;

  return (
    <div>
      <div className="fc-cards">
        {data.map((card, i) => (
          <Card key={i} title={card.name} link={card.link} />
        ))}
      </div>
      <div className="skola">
      <div className="skola-popis">Nejaky privitaci text pre uzivatelov, ktorý bude dlhší, čiže musím sem napísať niečo aby sme videli ako to vyzerá, keď tu je dlhší text</div>
      </div>
    </div>
  );
};

export default Cards;
