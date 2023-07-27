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
      name: "Slovencina",
      description: "Otazky na test z Slovencina 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 3,
      name: "Matematika",
      description: "Otazky na test z wawdaawd 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 4,
      name: "wwewewewee",
      description: "Otazky na test z wwewewewee 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 5,
      name: "oekfgoekfoefkoefkok",
      description: "Otazky na test z oekfgoekfoefkoefkok 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
    {
      id: 6,
      name: "posledne",
      description: "Otazky na test z poesledne 12.3.2023",
      author: "Adam Grik",
      dateCreated: new Date(),
    },
  ];
  return <Cards data={dummyCollectionData} />;
};

export default CardsContainer;
