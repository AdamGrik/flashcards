import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import "./images/images.scss";
import { HashRouter, Route, Routes } from "react-router-dom";

import Exam from "./oragnisms/Exam/Exam/Exam";
import { matQuestions } from "./utils/Questions/Matematika";
import { sjlQuestions } from "./utils/Questions/Slovencina";

import { anjQuestions } from "./utils/Questions/Anglina";
import { SubjectsData } from "./utils/SubjectsData";
import { tcozQuestions } from "./utils/Questions/Tcoz";
import { etsQuestions } from "./utils/Questions/ETS";
import MainPage from "./molecules/Cards/MainPage";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MainPage data={SubjectsData}></MainPage>} />
        <Route path="/matematika" element={<Exam data={matQuestions} />} />
        <Route path="/slovencina" element={<Exam data={sjlQuestions} />} />
        <Route path="/TCOZ" element={<Exam data={tcozQuestions} />} />
        <Route path="/AnglickyJazyk" element={<Exam data={anjQuestions} />} />
        <Route path="/ETS" element={<Exam data={etsQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root"); // ziskanie elementu root
const root = createRoot(container!); //inicializacia objektu root
root.render(<App />); //rendrovanie aplikacie v roote
