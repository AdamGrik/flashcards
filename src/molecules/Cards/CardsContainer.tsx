import React from "react";
import Cards from "./Cards";

const CardsContainer = () => {
  const dummyCollectionData = [
    {
      id: 1,
      name: "Matematika",
      description: "Otazky na test z matematiky 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 2,
      name: "Slovenčina",
      description: "Otazky na test z Slovencina 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 3,
      name: "Elektrotechnika",
      description: "Otazky na test z elektrotechniky 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 4,
      name: "Sieťové technológie",
      description: "Otazky na test z sieťových technológii 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 5,
      name: "Komunikačné technológie",
      description: "Otazky na test z komunikačných technológii 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 6,
      name: "Elektronika",
      description: "Otazky na test z elektroniky 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
  ];
  return <Cards data={dummyCollectionData} />;
};

export default CardsContainer;
