import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import "./ExamOptions.scss";
import NumberInput from "../../atoms/NumberInput/NumberInput";
import { shuffleArray } from "../../utils/common/shuffleArray";
import ArraySelection from "../../atoms/ArraySelection/ArraySelection";

type ExamOptionsProps = {
  data: database[];
};
export type database = {
  subject: string;
  questions: ExamQuestionProps[];
};
const ExamOptions = (props: ExamOptionsProps) => {
  const { data } = props;
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [maxQuestions, setMaxQuestions] = useState<number>(0);
  const [selectedTime, setselectedTime] = useState(NaN);
  const [startExamData, setStartExamData] = useState<ExamQuestionProps[]>([]);
  const [startExam, setStartExam] = useState(false);

  const handleStartExam = () => {
    const shuffledQuestions = shuffleArray(startExamData);
    const newData = shuffledQuestions.map((question, index) => {
      return { ...question, selected: "", questionNumber: index };
    });
    setStartExamData(newData);
    setStartExam(true);
    if (maxQuestions < numberOfQuestions) {
      setNumberOfQuestions(maxQuestions);
    }
    if (selectedTime > 1440) {
      setselectedTime(NaN);
    }
  };

  return (
    <>
      {startExam === true ? (
        <Exam
          data={startExamData.slice(0, numberOfQuestions)}
          totalQuestions={numberOfQuestions}
          initialMinutes={selectedTime}
        />
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
                    change={setNumberOfQuestions}
                    min={1}
                    max={maxQuestions}
                  />
                  /{maxQuestions}
                </div>
              </div>
              <div className="fc-exam-options-input-time">
                <div>Čas:</div>
                <div>
                  <NumberInput
                    value={selectedTime}
                    change={setselectedTime}
                    min={0}
                  />
                  minút
                </div>
              </div>
            </div>
            <ArraySelection
              data={data}
              changeData={setStartExamData}
              changeMaxQuestions={setMaxQuestions}
            />
            <div className="fc-exam-options-start-test">
              <Button
                title="Spustiť test"
                onClick={handleStartExam}
                disabled={
                  maxQuestions === 0 ||
                  selectedTime < 0 ||
                  numberOfQuestions <= 0 ||
                  Number.isNaN(numberOfQuestions)
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamOptions;
