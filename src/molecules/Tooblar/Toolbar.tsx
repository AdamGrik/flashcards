import React from "react";
import "./toolbar.scss";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Toolbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };
  return (
    <div className="fc-toolbar">
      <div className="fc-toolbar-left" onClick={handleClick}>
        Maturitné otázky
      </div>
      <div className="fc-toolbar-right">
        <Button title="Settings"></Button>
        <Button title="Database"></Button>
      </div>
    </div>
  );
};

export default Toolbar;
