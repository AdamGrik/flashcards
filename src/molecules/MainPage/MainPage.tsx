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
    setStartIndex(startIndex + i);
    setEndIndex(endIndex + i);
  };
  const handlePrevButtonClick = () => {
    setStartIndex(startIndex - i);
    setEndIndex(endIndex - i);
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

      <div className="fc-school-photo">
        {data.length > i ? (
          <div className="fc-main-page-navigation-buttons">
            <Button
              title="<"
              onClick={handlePrevButtonClick}
              disabled={startIndex === 0}
              id="card-navigation"
            />
            <Button
              title=">"
              onClick={handleNextButtonClick}
              disabled={startIndex >= data.length - i}
              id="card-navigation"
            />
          </div>
        ) : null}
      </div>
      <div className="gap"></div>
      <Footer />
    </div>
  );
};

export default MainPage;
