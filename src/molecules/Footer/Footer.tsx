import React from "react";
import "./Footer.scss";

const Cards = () => {
  return (
    <div className="fc-footer">
      <div>Autori: Adam Grík, Adam Petrík</div>
      <div>Kozultantka: Mgr. Kamila Švecová</div>
      <div>Školský rok: 2023/2024</div>
      <div>Trieda: IV.EA</div>

      <a href="https://github.com/AdamGrik/flashcards" target="blank">
        <div className="fc-github-pic"></div>
      </a>
    </div>
  );
};

export default Cards;
