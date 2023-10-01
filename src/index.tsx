import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import Body from "./oragnisms/Body/Body";
import { HashRouter, Route, Routes } from "react-router-dom";
import Exam from "./oragnisms/Exam/Exam";
import { matQuestions } from "./utils/Questions/Matematika";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/matematika" element={<Exam data={matQuestions} />} />
        <Route path="/slovencina" element={<div></div>} />
      </Routes>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
