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

import BeforeExam from "./molecules/BeforeExam/BeforeExam";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MainPage data={SubjectsData}></MainPage>} />
        <Route path="/mat" element={<BeforeExam />} />
        <Route path="/mat/exam" element={<Exam data={matQuestions} />} />
        <Route path="/slj" element={<BeforeExam />} />
        <Route path="/slj/exam" element={<Exam data={sjlQuestions} />} />
        <Route path="/tcoz" element={<BeforeExam />} />
        <Route path="/tcoz/exam" element={<Exam data={tcozQuestions} />} />
        <Route path="/anj" element={<BeforeExam />} />
        <Route path="/anj/exam" element={<Exam data={anjQuestions} />} />
        <Route path="/ets" element={<BeforeExam />} />
        <Route path="/ets/exam" element={<Exam data={etsQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
