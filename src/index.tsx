import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Database from "./oragnisms/Exam/Database/Database";
import Exam from "./oragnisms/Exam/Exam/Exam";
import { matQuestions } from "./utils/Questions/Matematika";
import { sjlQuestions } from "./utils/Questions/Slovencina";

import { anjQuestions } from "./utils/Questions/Anglina";
import Cards from "./molecules/Cards/Cards";
import { SubjectsData } from "./utils/SubjectsData";
import { tcozQuestions } from "./utils/Questions/Tcoz";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Cards data={SubjectsData}></Cards>} />
        <Route path="/database" element={<Database />} />
        <Route path="/matematika" element={<Exam data={matQuestions} />} />
        <Route path="/slovencina" element={<Exam data={sjlQuestions} />} />
        <Route path="/TCOZ" element={<Exam data={tcozQuestions} />} />
        <Route path="/AnglickyJazyk" element={<Exam data={anjQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root"); // ziskanie elementu root
const root = createRoot(container!); //inicializacia objektu root
root.render(<App />); //rendrovanie aplikacie v roote
