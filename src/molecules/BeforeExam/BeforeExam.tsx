import React, { ChangeEvent, useState } from "react";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const BeforeExam = () => {
  const navigate = useNavigate();
  const startTest = () => {
    navigate("exam");
  };
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(20);
  const [selectedTime, setselectedTime] = useState<number>(20);

  const handleInputQuestionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfQuestions(value);
  };
  const handleInputTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setselectedTime(value);
  };

  return (
    <>
      <div>
        <Button title="Spustit test" onClick={startTest}></Button>
      </div>
      <div>
        <input
          type="number"
          value={numberOfQuestions}
          onChange={handleInputQuestionsChange}></input>
        pocet otazok
      </div>
      <div>
        <input
          type="number"
          value={selectedTime}
          onChange={handleInputTimeChange}></input>
        cas
      </div>
      <div>{numberOfQuestions}</div>
      <div>{selectedTime}</div>
    </>
  );
};

export default BeforeExam;
