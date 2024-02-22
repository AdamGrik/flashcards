import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import "./images/images.scss";
import { HashRouter, Route, Routes } from "react-router-dom";

import Exam from "./oragnisms/Exam/Exam/Exam";
import { matDatabaseOptions, matQuestions } from "./utils/Questions/Matematika";
import { sjlQuestions, sljDatabaseOptions } from "./utils/Questions/Slovencina";

import { anjDatabaseOptions, anjQuestions } from "./utils/Questions/Anglina";
import { SubjectsData } from "./utils/SubjectsData";
import { tcozDatabaseOptions, tcozQuestions } from "./utils/Questions/Tcoz";
import { etsDatabaseOptions, etsQuestions } from "./utils/Questions/ETS";
import MainPage from "./molecules/MainPage/MainPage";

import BeforeExam from "./molecules/BeforeExam/BeforeExam";

const App = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<MainPage data={SubjectsData}></MainPage>} />
        <Route
          path="/mat"
          element={
            <Exam data={matQuestions} databaseoptions={matDatabaseOptions} />
          }
        />
        <Route
          path="/slj"
          element={
            <Exam data={sjlQuestions} databaseoptions={sljDatabaseOptions} />
          }
        />
        <Route
          path="/tcoz"
          element={
            <Exam data={tcozQuestions} databaseoptions={tcozDatabaseOptions} />
          }
        />
        <Route
          path="/anj"
          element={
            <Exam data={anjQuestions} databaseoptions={anjDatabaseOptions} />
          }
        />
        <Route
          path="/ets"
          element={
            <Exam data={etsQuestions} databaseoptions={etsDatabaseOptions} />
          }
        />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
