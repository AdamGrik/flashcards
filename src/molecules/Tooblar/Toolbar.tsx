import React from "react";
import "./toolbar.scss";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Toolbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };
  const databaseClick = () => {
    navigate("database");
  };

  return (
    <div className="fc-toolbar">
      <div className="fc-toolbar-left" onClick={handleClick}>
        Maturitné testy
      </div>
      <div className="fc-toolbar-right">
        <Button title="Database" onClick={databaseClick}></Button>
      </div>
    </div>
  );
};

export default Toolbar;
