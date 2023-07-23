import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="fc">
      <Toolbar />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
