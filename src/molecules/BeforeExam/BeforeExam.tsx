import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
type BeforeExamProps = {
  data: database[];
};
type database = {
  label: string;
  items: ExamQuestionProps[];
};
const BeforeExam = (props: BeforeExamProps) => {
  const { data } = props;
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(0);
  const [selectedTime, setselectedTime] = useState(20);
  const [checkboxArrays, setCheckboxArrays] = useState<database[]>(data);
  const [selectedArrays, setSelectedArrays] = useState<string[]>([]);
  const [startExamData, setStartExamData] = useState<ExamQuestionProps[]>([]);
  const [startExam, setStartExam] = useState(false);

  const handleCheckboxChange = (label: string) => {
    setSelectedArrays((prevSelectedArrays) => {
      if (prevSelectedArrays.includes(label)) {
        return prevSelectedArrays.filter((item) => item !== label);
      } else {
        return [...prevSelectedArrays, label];
      }
    });
  };
  useEffect(() => {
    handleButtonClick();
  }, [selectedArrays]);

  const handleInputQuestionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfQuestions(value);
  };
  const handleInputTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setselectedTime(value);
  };
  const handleButtonClick = () => {
    const newArray: ExamQuestionProps[] = [];

    checkboxArrays.forEach((checkboxArray) => {
      if (selectedArrays.includes(checkboxArray.label)) {
        newArray.push(...checkboxArray.items);
      }
    });
    setStartExamData(newArray);
    setMaxQuestions(newArray.length);
    console.log(newArray);
  };

  return (
    <>
      {startExam === true ? (
        <Exam
          data={startExamData}
          totalQuestions={numberOfQuestions}
          initialMinutes={selectedTime}></Exam>
      ) : (
        <>
          {checkboxArrays.map((checkboxArray) => (
            <div key={checkboxArray.label}>
              <Checkbox
                title={checkboxArray.label}
                isChecked={selectedArrays.includes(checkboxArray.label)}
                onChange={() => handleCheckboxChange(checkboxArray.label)}
              />
            </div>
          ))}

          <div>
            Počet otázok
            <input
              type="number"
              value={numberOfQuestions}
              onChange={handleInputQuestionsChange}
              min={1}
              max={maxQuestions}></input>
            /{maxQuestions}
          </div>
          <div>
            Čas
            <input
              type="number"
              value={selectedTime}
              onChange={handleInputTimeChange}
              min={1}
              max={999}></input>
            minút
          </div>
          <Button title="test" onClick={() => setStartExam(true)}></Button>
        </>
      )}
    </>
  );
};

export default BeforeExam;
