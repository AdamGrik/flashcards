import React from "react";
import { createRoot } from "react-dom/client";
import Toolbar from "./molecules/Tooblar/Toolbar";
import "./index.scss";
import Body from "./oragnisms/Body/Body";

const App: React.FC = () => {
  return (
    <div className="fc">
      <Toolbar />
      <Body />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
