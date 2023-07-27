import React from "react";
import "./Body.scss";
import CardsContainer from "../../molecules/Cards/CardsContainer";

const Body = () => {
  const dummyQuestionsData = {
    id: 1,
    questions: [
      { question: "wadjowadjoj", answer: "wadwddwwddwdw" },
      { question: "ddd", answer: "ggggggrtrrr" },
      { question: "wdwqwqwqwwq", answer: "rorgorgogr" },
      { question: "wadjowadwadwadjoj", answer: "adam" },
      { question: "wadjyyyyyyyyyyyyyyyowadjoj", answer: "awawaw" },
      { question: "yyyy", answer: "iiiiii" },
      { question: "popopoppo", answer: "uuu" },
    ],
  };

  return (
    <div className="fc-body">
      <CardsContainer></CardsContainer>
    </div>
  );
};

export default Body;
