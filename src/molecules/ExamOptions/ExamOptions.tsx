import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
type ExamOptionsProps = {
  data: database[];
};
type database = {
  subject: string;
  questions: ExamQuestionProps[];
};
const ExamOptions = (props: ExamOptionsProps) => {
  const { data } = props;
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [maxQuestions, setMaxQuestions] = useState<number>(0);
  const [selectedTime, setselectedTime] = useState(20);
  const [checkboxArrays, setCheckboxArrays] = useState<database[]>(data);
  const initialSelectedArrays = checkboxArrays.map(
    (checkboxArray) => checkboxArray.subject
  );
  const [selectedArrays, setSelectedArrays] = useState<string[]>(
    initialSelectedArrays
  );
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
  useEffect(() => {
    if (selectedTime === 0 || Number.isNaN(selectedTime)) {
      setselectedTime(1);
    }
  }, [selectedTime]);
  useEffect(() => {
    if (numberOfQuestions === 0 || Number.isNaN(numberOfQuestions)) {
      setNumberOfQuestions(1);
    }
  }, [numberOfQuestions]);
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
      if (selectedArrays.includes(checkboxArray.subject)) {
        newArray.push(...checkboxArray.questions);
      }
    });
    setStartExamData(newArray);
    setMaxQuestions(newArray.length);
  };
  const handleStartExam = () => {
    setStartExam(true);
    if (maxQuestions < numberOfQuestions) {
      setNumberOfQuestions(maxQuestions);
    }
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
            <div key={checkboxArray.subject}>
              <Checkbox
                title={checkboxArray.subject}
                isChecked={selectedArrays.includes(checkboxArray.subject)}
                onChange={() => handleCheckboxChange(checkboxArray.subject)}
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
          <Button
            title="test"
            onClick={handleStartExam}
            disabled={maxQuestions === 0}></Button>
        </>
      )}
    </>
  );
};

export default ExamOptions;
