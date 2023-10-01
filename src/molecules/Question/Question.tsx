import React, { useState } from "react";
import "./Question.scss";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam";
import Button from "../../atoms/Button/Button";

type QuestionProps = {
  data: ExamQuestionProps;
  onNext: (selectedOption: string, answer: string) => void;
};
const Question = (props: QuestionProps) => {
  const { data, onNext } = props;
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="fc-question">
      <div>
        {data.question}
        <div>
          {data.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </div>
          ))}

          <Button
            title={"Next"}
            onClick={() => onNext(selectedOption, data.answer)}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
