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

import MainPage from "./molecules/MainPage/MainPage";

import BeforeExam from "./molecules/BeforeExam/BeforeExam";
import { tcozQuestions } from "./utils/Questions/Tcoz";
import { etsQuestions } from "./utils/Questions/ETS";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MainPage data={SubjectsData}></MainPage>} />
        <Route path="/mat" element={<BeforeExam data={matQuestions} />} />
        <Route path="/slj" element={<BeforeExam data={sjlQuestions} />} />
        <Route path="/tcoz" element={<BeforeExam data={tcozQuestions} />} />
        <Route path="/anj" element={<BeforeExam data={anjQuestions} />} />
        <Route path="/ets" element={<BeforeExam data={etsQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
