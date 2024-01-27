import React, { useEffect, useState } from "react";
import "./Question.scss";
import Exam, { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import Button from "../../atoms/Button/Button";

type QuestionProps = {
  data: ExamQuestionProps;
  onNext: (selectedOption: string, questionNumber: number) => void;
  onPrevious: () => void;
};

const Question = (props: QuestionProps) => {
  const { data, onNext, onPrevious } = props;

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
        <div className="fc-question-img">{data.image}</div>
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
              {option}
            </div>
          ))}
          <div className="buttons">
            <div className="prev-button">
              <Button title="Späť" onClick={onPrevious} />
            </div>
            <div className="next-button">
              {isFinalQuestion ? (
                <Button
                  title="Koniec"
                  onClick={() =>
                    onNext(selectedOption, data.questionNumber ?? 0)
                  }
                />
              ) : (
                <Button
                  title="Ďalej"
                  onClick={() =>
                    onNext(selectedOption, data.questionNumber ?? 0)
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Question;
