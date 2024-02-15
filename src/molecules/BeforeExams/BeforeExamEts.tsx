import React from "react";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const BeforeExamEts = () => {
  const navigate = useNavigate();
  const startTest = () => {
    navigate("ETS");
  };
  return (
    <>
      <div>
        <Button title="Spustit test" onClick={startTest}></Button>
      </div>
      <div>
        <input type="number"></input> pocet otazok
      </div>
      <div>
        <input type="number"></input> cas
      </div>
    </>
  );
};

export default BeforeExamEts;
