import React from "react";
import "./EndOfExam.scss";
import { ExamQuestionProps } from "../Exam/Exam/Exam";
import Question from "../../molecules/Question/Question";
import Button from "../../atoms/Button/Button";
import { Navigate, useNavigate } from "react-router-dom";

type ExamProps = {
  questions: ExamQuestionProps[];
  score: number;
  percentage?: number;
};

const endOfExam = (props: ExamProps) => {
  const { questions, score } = props;
  const percentage = (score / questions.length) * 100;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="fc-end-of-exam">
      <div className="fc-end-of-exam-score">
        Skóre: {score} / {questions.length}
      </div>
      <div className="fc-percentage">{Math.round(percentage)} %</div>
      <div className="fc-main-page-button">
        <Button title="Späť na hlavnú stránku" onClick={handleClick} />
      </div>
      <div className="fc-end-of-exam-questions">
        {questions.map((question) => {
          const answerClass =
            question.answer === question.selected
              ? "fc-end-of-exam-question-correct"
              : "fc-end-of-exam-question-incorrect";
          return (
            <div className={"fc-end-of-exam-question " + answerClass}>
              <div className="fc-end-of-exam-question-question">
                {question.question}
              </div>
              <div>Vaša odpoveď: {question.selected}</div>
              <div>Správna odpoveď: {question.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default endOfExam;
