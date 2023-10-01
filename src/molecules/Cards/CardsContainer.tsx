import React from "react";
import Cards from "./Cards";

const CardsContainer = () => {
  const dummyCollectionData = [
    {
      link: "matematika",
      name: "Matematika",
      description: "Otazky na test z matematiky 12.3.2023",
    },
    {
      link: "slovencina",
      name: "Slovenčina",
      description: "Otazky na test z Slovencina 12.3.2023",
    },
    {
      link: "matematika",
      name: "Elektrotechnika",
      description: "Otazky na test z elektrotechniky 12.3.2023",
    },
    {
      link: "matematika",
      name: "Sieťové technológie",
      description: "Otazky na test z sieťových technológii 12.3.2023",
    },
    {
      link: "matematika",
      name: "Komunikačné technológie",
      description: "Otazky na test z komunikačných technológii 12.3.2023",
    },
    {
      link: "matematika",
      name: "Elektronika",
      description: "Otazky na test z elektroniky 12.3.2023",
    },
  ];
  return <Cards data={dummyCollectionData} />;
};

export default CardsContainer;
