import React, { useEffect, useState } from "react";
import "./Question.scss";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import Pagination from "../Pagination/Pagination";

type QuestionProps = {
  data: ExamQuestionProps;
  examData: ExamQuestionProps[];
  onQuestionChange: (
    selectedOption: string,
    questionNumber: number,
    nextQuestion: number
  ) => void;
};

const Question = (props: QuestionProps) => {
  const { data, onQuestionChange, examData } = props;
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    if (data && data.selected) {
      setSelectedOption(data.selected);
    } else {
      setSelectedOption("");
    }
  }, [data]);

  const isFinalQuestion =
    data && data.questionNumber === (data.totalQuestions ?? 0) - 1;
  const selectOption = (option: string) => {
    selectedOption === option
      ? setSelectedOption("")
      : setSelectedOption(option);
  };

  return data && data.questionNumber !== undefined ? (
    <div className="fc-question">
      <div className="fc-question-border">
        <div className="fc-question-question">
          {data.questionNumber + 1}. / {data.totalQuestions} {data.question}
        </div>
        <div>{data.text}</div>
        <div className="fc-question-text"> {data.textQuestion}</div>
        {data.image !== undefined ? (
          <div className={`fc-question-img fc-image-${data.image}`} />
        ) : null}

        {data.options.map((option, index) => (
          <div
            key={index}
            className="fc-question-options"
            onClick={() => selectOption(option)}>
            <input
              className="fc-question-options-radio"
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                selectOption(e.target.value);
              }}
            />
            <span className="fc-question-options-abcd">
              {String.fromCharCode(97 + index)}.)
            </span>
            {option}
          </div>
        ))}
        <div className="fc-question-pagination">
          <Pagination
            totalPages={data.totalQuestions ?? 0}
            selected={data.questionNumber}
            isFinalQuestion={isFinalQuestion}
            examData={examData}
            onPageSelect={(selectedPage) =>
              onQuestionChange(
                selectedOption,
                data.questionNumber ?? 0,
                selectedPage
              )
            }></Pagination>
        </div>
      </div>
    </div>
  ) : null;
};

export default Question;
