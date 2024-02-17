// TODO : REFACTOR

import React from "react";
import "./EndOfExam.scss";
import { ExamQuestionProps } from "../Exam/Exam/Exam";
import Question from "../../molecules/Question/Question";
import Button from "../../atoms/Button/Button";
import { Navigate, useNavigate } from "react-router-dom";

type ExamProps = {
  questions: ExamQuestionProps[];
  score: number;
  totalQuestions: number;
};

const endOfExam = (props: ExamProps) => {
  const { questions, score, totalQuestions } = props;

  const percentage: number = (score / totalQuestions) * 100;
  const percentageColor =
    percentage > 32 ? "fc-percentage-color-pass" : "fc-percentage-color-fail";
  let grade: number;
  switch (true) {
    case percentage > 89:
      grade = 1;
      break;
    case percentage > 74:
      grade = 2;
      break;
    case percentage > 49:
      grade = 3;
      break;
    case percentage > 32:
      grade = 4;
      break;
    default:
      grade = 5;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="fc-end-of-exam">
      <div className="fc-end-of-exam-score">
        Skóre: {score} / {totalQuestions}
      </div>
      <div className={"fc-percentage " + percentageColor}>
        {Math.round(percentage)} %
      </div>
      <div className="fc-grade-and-number">
        <div className="fc-grade">Známka: </div>
        <div className="fc-grade-number">{grade}</div>
      </div>
      <div className="fc-main-page-button">
        <Button title="Späť na hlavnú stránku" onClick={handleClick} />
      </div>
      <div className="fc-end-of-exam-questions">
        {questions.slice(0, totalQuestions).map((question) => {
          const answerClass =
            question.answer === question.selected
              ? "fc-end-of-exam-question-correct"
              : "fc-end-of-exam-question-incorrect";

          return question && question.questionNumber !== undefined ? (
            <div className={"fc-end-of-exam-question " + answerClass}>
              {question.textQuestion !== undefined ? (
                <div className="fc-end-of-exam-question-question">
                  {" "}
                  {question.questionNumber + 1}. {question.textQuestion}
                </div>
              ) : (
                <div className="fc-end-of-exam-question-question">
                  {question.questionNumber + 1}. {question.question}
                </div>
              )}
              {question.image !== undefined ? (
                <div
                  className={`fc-question-img fc-image-${question.image}`}></div>
              ) : null}
              <div className="fc-end-of-exam-question-options">
                {question.options.map((option, index) => {
                  if (option === question.answer) {
                    return (
                      <div
                        key={index}
                        className="fc-end-of-exam-question-correct-answer">
                        {String.fromCharCode(97 + index)}.) {option}
                        <div className="correct-answer">Správna odpoveď</div>
                      </div>
                    );
                  } else if (option === question.selected) {
                    return (
                      <div
                        key={index}
                        className="fc-end-of-exam-question-selected-answer">
                        {String.fromCharCode(97 + index)}.) {option}
                        <div className="your-answer">Vaša odpoveď</div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className="fc-end-of-exam-question-option">
                        {String.fromCharCode(97 + index)}.) {option}{" "}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default endOfExam;
