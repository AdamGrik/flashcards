import React, { ChangeEvent, useState } from "react";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
type BeforeExamProps = {
  numberOfQuestions?: number;
  onNumberOfQuestionsChange: (value: number) => void;
  onStartExam: () => void;
};

const BeforeExam = (props: BeforeExamProps) => {
  const { onNumberOfQuestionsChange, onStartExam } = props;
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [showBeforeExam, setShowBeforeExam] = useState(true);

  const [selectedTime, setselectedTime] = useState<number>(20);

  const handleInputQuestionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfQuestions(value);
    onNumberOfQuestionsChange(value);
  };
  const handleInputTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setselectedTime(value);
  };
  const handleStartExamClick = () => {
    onStartExam();
    setShowBeforeExam(false);
  };
  return (
    <>
      {showBeforeExam && (
        <>
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
          <Button title="Start Exam" onClick={handleStartExamClick}></Button>
        </>
      )}
    </>
  );
};

export default BeforeExam;
