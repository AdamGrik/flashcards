import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import "./images/images.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import { matQuestions } from "./utils/Questions/Matematika";
import { sjlQuestions } from "./utils/Questions/Slovencina";
import { anjQuestions } from "./utils/Questions/Anglina";
import { SubjectsData } from "./utils/SubjectsData";
import MainPage from "./molecules/MainPage/MainPage";
import { tcozQuestions } from "./utils/Questions/Tcoz";
import { etsQuestions } from "./utils/Questions/ETS";
import ExamOptions from "./oragnisms/ExamOptions/ExamOptions";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MainPage data={SubjectsData} />} />
        <Route path="/mat" element={<ExamOptions data={matQuestions} />} />
        <Route path="/slj" element={<ExamOptions data={sjlQuestions} />} />
        <Route path="/tcoz" element={<ExamOptions data={tcozQuestions} />} />
        <Route path="/anj" element={<ExamOptions data={anjQuestions} />} />
        <Route path="/ets" element={<ExamOptions data={etsQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
