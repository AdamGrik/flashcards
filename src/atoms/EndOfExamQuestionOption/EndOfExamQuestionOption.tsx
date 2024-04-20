import React from "react";
import "./EndOfExamQuestionOption.scss";

type EndOfExamQuestionQuestionProps = {
  option: string;
  selected?: string;
  answer: string;
  index: number;
};

const EndOfExamQuestionOption = (props: EndOfExamQuestionQuestionProps) => {
  const { option, selected, answer, index } = props;

  let optionClass = "fc-end-of-exam-question-option";
  let label: string = "";
  if (option === answer) {
    optionClass = "fc-end-of-exam-question-correct-answer";
    label = "Správna odpoveď";
  } else if (option === selected) {
    optionClass = "fc-end-of-exam-question-selected-answer";
    label = "Vaša odpoveď";
  }

  return (
    <>
      <div key={index} className={optionClass}>
        {String.fromCharCode(97 + index)}.) {option}
        <span className="fc-end-of-exam-question-option-label">{label}</span>
      </div>
    </>
  );
};

export default EndOfExamQuestionOption;
