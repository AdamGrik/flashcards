import React from "react";
import "./Footer.scss";

const Cards = () => {
  return (
    <div className="fc-footer">
      <div className="fc-footer-left">
        <div>
          <div>Autori: Adam Grík, Adam Petrík</div>
          <div>Konzultantka: Mgr. Kamila Švecová</div>
        </div>
        <div>
          <div>Školský rok: 2023/2024</div>
          <div>Trieda: IV.EA</div>
        </div>
      </div>
      <div className="fc-footer-right">
        <a href="https://github.com/AdamGrik/flashcards" target="blank">
          <div className="fc-github-pic"></div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
