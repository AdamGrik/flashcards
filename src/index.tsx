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
import BeforeExamSlj from "./molecules/BeforeExams/BeforeExamSlj";
import BeforeExamMat from "./molecules/BeforeExams/BeforeExamMat";
import BeforeExamEts from "./molecules/BeforeExams/BeforeExamEts";
import BeforeExamAnj from "./molecules/BeforeExams/BeforeExamAnj";
import BeforeExamTcoz from "./molecules/BeforeExams/BeforeExamTcoz";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MainPage data={SubjectsData}></MainPage>} />
        <Route path="/matExam" element={<BeforeExamMat />} />
        <Route
          path="/matExam/matematika"
          element={<Exam data={matQuestions} />}
        />
        <Route path="/sljExam" element={<BeforeExamSlj />} />
        <Route
          path="/sljExam/slovencina"
          element={<Exam data={sjlQuestions} />}
        />
        <Route path="/TCOZExam" element={<BeforeExamTcoz />} />
        <Route path="/TCOZExam/TCOZ" element={<Exam data={tcozQuestions} />} />
        <Route path="/anjExam" element={<BeforeExamAnj />} />
        <Route
          path="/anjExam/AnglickyJazyk"
          element={<Exam data={anjQuestions} />}
        />
        <Route path="/ETSExam" element={<BeforeExamEts />} />
        <Route path="/ETSExam/ETS" element={<Exam data={etsQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
