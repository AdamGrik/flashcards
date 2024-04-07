import React, { useState } from "react";
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
  const i: number = 5;
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(i);

  const handleNextButtonClick = () => {
    if (startIndex < data.length - i) {
      setStartIndex(startIndex + i);
      setEndIndex(endIndex + i);
    }
  };
  const handlePrevButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - i);
      setEndIndex(endIndex - i);
    }
  };

  return (
    <div className="fc-main-page">
      <div className="fc-cards">
        {data.slice(startIndex, endIndex).map((card, i) => (
          <Card
            key={i}
            title={card.name}
            link={card.link}
            author={card.author}
          />
        ))}
      </div>
      <div className="fc-main-page-navigation-buttons">
        {startIndex > 0 ? (
          <Button title="<" onClick={handlePrevButtonClick}></Button>
        ) : null}
        {endIndex < data.length ? (
          <Button title=">" onClick={handleNextButtonClick}></Button>
        ) : null}
      </div>
      <div className="fc-school-photo"></div>
      <div className="gap"></div>
      <Footer />
    </div>
  );
};

export default MainPage;
