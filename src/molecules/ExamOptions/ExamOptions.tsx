import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import "./ExamOptions.scss";
import NumberInput from "../../atoms/NumberInput/NumberInput";

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
    handleCheckboxClick();
  }, [selectedArrays]);

  const handleInputQuestionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfQuestions(value);
  };
  const handleInputTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setselectedTime(value);
  };
  const handleCheckboxClick = () => {
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
        <div className="fc-exam-options">
          <div className="fc-exam-options-border">
            <div className="fc-exam-options-label">Nastavenie testu</div>
            <div className="fc-exam-options-inputs">
              <div className="fc-exam-options-input-questions">
                <div>Počet otázok:</div>
                <div>
                  <NumberInput
                    value={numberOfQuestions}
                    onChange={handleInputQuestionsChange}
                    min={1}
                    max={maxQuestions}></NumberInput>
                  /{maxQuestions}
                </div>
              </div>
              <div className="fc-exam-options-input-time">
                <div>Čas:</div>
                <div>
                  <NumberInput
                    value={selectedTime}
                    onChange={handleInputTimeChange}
                    min={1}></NumberInput>
                  minút
                </div>
              </div>
            </div>
            <div className="fc-exam-options-checkboxes">
              {checkboxArrays.map((checkboxArray) => (
                <>
                  <div
                    key={checkboxArray.subject}
                    className="fc-exam-options-checkbox">
                    <Checkbox
                      isChecked={selectedArrays.includes(checkboxArray.subject)}
                      onChange={() =>
                        handleCheckboxChange(checkboxArray.subject)
                      }
                    />
                    <span
                      className="fc-exam-options-checkbox-label"
                      onClick={() =>
                        handleCheckboxChange(checkboxArray.subject)
                      }>
                      {checkboxArray.subject}
                    </span>
                  </div>
                </>
              ))}
            </div>
            <div className="fc-exam-options-start-test">
              <Button
                title="Spustiť test"
                onClick={handleStartExam}
                disabled={
                  maxQuestions === 0 ||
                  selectedTime <= 0 ||
                  Number.isNaN(selectedTime) ||
                  numberOfQuestions <= 0 ||
                  Number.isNaN(numberOfQuestions)
                }></Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamOptions;
