import React, { useEffect, useState } from "react";
import "./Question.scss";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
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

  return data && data.questionNumber !== undefined ? (
    <div className="fc-question">
      <div>
        {data.questionNumber + 1}. {data.question}
        <div>
          {data.options.map((option, index) => (
            <div key={index}>
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
              <Button title="Previous" onClick={onPrevious} />
            </div>
            <div className="next-button">
              <Button
                title="Next"
                onClick={() => onNext(selectedOption, data.questionNumber ?? 0)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Question;
