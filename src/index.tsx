import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import Subjects from "./oragnisms/Subjects/Subjects";
import { HashRouter, Route, Routes } from "react-router-dom";
import Exam from "./oragnisms/Exam/Exam";
import { matQuestions } from "./utils/Questions/Matematika";
import { sjlQuestions } from "./utils/Questions/Slovencina";
import { elkQuestions } from "./utils/Questions/Elektrotechnika";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Subjects />} />
        <Route path="/matematika" element={<Exam data={matQuestions} />} />
        <Route path="/slovencina" element={<Exam data={sjlQuestions} />} />
        <Route path="/elektrotechnika" element={<Exam data={elkQuestions} />} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
