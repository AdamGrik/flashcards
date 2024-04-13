import React from "react";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import "./EndOfExamQuestion.scss";

type EndOfExamQuestionProps = { question: ExamQuestionProps };

const EndOfExamQuestion = (props: EndOfExamQuestionProps) => {
  const { question } = props;
  const answerClass =
    question.answer === question.selected
      ? "fc-end-of-exam-question-correct"
      : "fc-end-of-exam-question-incorrect";

  return question && question.questionNumber !== undefined ? (
    <div className={"fc-end-of-exam-question " + answerClass}>
      {question.textQuestion !== undefined ? (
        <div className="fc-end-of-exam-question-question">
          {question.questionNumber + 1}. {question.textQuestion}
        </div>
      ) : (
        <div className="fc-end-of-exam-question-question">
          {question.questionNumber + 1}. {question.question}
        </div>
      )}
      {question.image !== undefined ? (
        <div className={`fc-question-img fc-image-${question.image}`}></div>
      ) : null}
      <div className="fc-end-of-exam-question-options">
        {question.options.map((option, index) => {
          let optionClass = "fc-end-of-exam-question-option";
          let label: string = "";
          if (option === question.answer) {
            optionClass = "fc-end-of-exam-question-correct-answer";
            label = "Správna odpoveď";
          } else if (option === question.selected) {
            optionClass = "fc-end-of-exam-question-selected-answer";
            label = "Vaša odpoveď";
          }

          return (
            <div key={index} className={optionClass}>
              {String.fromCharCode(97 + index)}.) {option}
              <span className="fc-end-of-exam-question-option-label">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};
export default EndOfExamQuestion;
