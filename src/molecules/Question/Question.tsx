import React, { useState } from "react";
import "./Question.scss";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam";
import Button from "../../atoms/Button/Button";

type QuestionProps = {
  data: ExamQuestionProps;
  onNext: (selectedOption: string, answer: string) => void;
};

const Question = (props: QuestionProps) => {
  const { data, onNext } = props; // destruktulazacia props aby sa nemuselo vzdy pisat props.data / props.onNext ...

  const [selectedOption, setSelectedOption] = useState<string>(""); //usestate je reaktovy hook na drzanie stavu komponenty

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // react.change je typ na uzivatelsku udalost v input elemente
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
                className="fc-question-radio"
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
