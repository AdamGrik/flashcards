import React, { useEffect, useState } from "react";
import "./Question.scss";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import Button from "../../atoms/Button/Button";
import Pagination from "../Pagination/Pagination";

type QuestionProps = {
  data: ExamQuestionProps;
  onQuestionChange: (
    selectedOption: string,
    questionNumber: number,
    nextQuestion: number
  ) => void;
};

const Question = (props: QuestionProps) => {
  const { data, onQuestionChange } = props;

  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    if (data && data.selected) {
      setSelectedOption(data.selected);
    } else {
      setSelectedOption("");
    }
  }, [data]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const isFinalQuestion =
    data && data.questionNumber === (data.totalQuestions ?? 0) - 1;

  return data && data.questionNumber !== undefined ? (
    <div className="fc-question">
      <div className="fc-question-border">
        <div className="fc-question-top">
          {data.questionNumber + 1}. / {data.totalQuestions} {data.question}
        </div>
        <div>{data.text}</div>
        <div className="fc-text-question"> {data.textQuestion}</div>
        {data.image !== undefined ? (
          <div className={`fc-question-img fc-image-${data.image}`} />
        ) : null}
        <div>
          {data.options.map((option, index) => (
            <div key={index} className="fc-question-bottom">
              <input
                className="fc-question-radio"
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <span className="fc-option-abcd">
                {String.fromCharCode(97 + index)}.){" "}
              </span>{" "}
              {option}
            </div>
          ))}
          <Pagination
            totalPages={data.totalQuestions ?? 0}
            selected={data.questionNumber}
            isFinalQuestion={isFinalQuestion}
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
