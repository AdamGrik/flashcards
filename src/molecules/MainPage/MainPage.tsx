import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import Card from "../../atoms/Card/Card";
import Footer from "../Footer/Footer";
import Button from "../../atoms/Button/Button";

type CardProps = {
  data: CardsData[];
};

type CardsData = {
  name: string;
  link: string;
  author: string;
};

const MainPage = (props: CardProps) => {
  const { data } = props;

  return (
    <div className="fc-main-page">
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
      <Footer />
    </div>
  );
};

export default MainPage;
