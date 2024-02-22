import React, { ChangeEvent, useState } from "react";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../atoms/Checkbox/Checkbox";
type BeforeExamProps = {
  onNumberOfQuestionsChange: (value: number) => void;
  onTimeOfExamChange: (value: number) => void;
  onStartExam: () => void;
  data: CheckboxData[];
};
type CheckboxData = {
  title: string;
};
const BeforeExam = (props: BeforeExamProps) => {
  const { onNumberOfQuestionsChange, onStartExam, onTimeOfExamChange, data } =
    props;
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [showBeforeExam, setShowBeforeExam] = useState(true);
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(
    data.map(() => false)
  );
  const [selectedTime, setselectedTime] = useState(20);

  const handleInputQuestionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfQuestions(value);
    onNumberOfQuestionsChange(value);
  };
  const handleInputTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setselectedTime(value);
    onTimeOfExamChange(value);
  };
  const handleStartExamClick = () => {
    onStartExam();
    setShowBeforeExam(false);
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = checked;
    setCheckboxStates(newCheckboxStates);
  };
  return (
    <>
      {showBeforeExam && (
        <>
          {data.map((option, index) => (
            <Checkbox
              key={option.title}
              title={option.title}
              isChecked={checkboxStates[index]}
              onChange={(checked) => handleCheckboxChange(index, checked)}
            />
          ))}
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
          <Button title="Spustiť test" onClick={handleStartExamClick}></Button>
        </>
      )}
    </>
  );
};

export default BeforeExam;
