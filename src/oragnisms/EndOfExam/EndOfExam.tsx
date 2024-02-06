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
  percentage?: number;
  percentageColor?: boolean;
};

const endOfExam = (props: ExamProps) => {
  const { questions, score, totalQuestions } = props;
  const percentage = (score / totalQuestions) * 100;
  const percentageColor =
    percentage > 33 ? "fc-percentage-color-pass" : "fc-percentage-color-fail";

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
                        <div>
                          {String.fromCharCode(97 + index)}.) {option}
                        </div>
                        <div className="correct-answer">Správna odpoveď</div>
                      </div>
                    );
                  } else if (option === question.selected) {
                    return (
                      <div
                        key={index}
                        className="fc-end-of-exam-question-selected-answer">
                        <div>
                          {String.fromCharCode(97 + index)}.) {option}
                        </div>
                        <div className="your-answer">Vaša odpoveď</div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className="fc-end-of-exam-question-option">
                        <div>
                          {String.fromCharCode(97 + index)}.) {option}{" "}
                        </div>
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
