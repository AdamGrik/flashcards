import React from "react";
import "./EndOfExam.scss";
import { ExamQuestionProps } from "../Exam/Exam/Exam";
import Question from "../../molecules/Question/Question";

type ExamProps = {
  questions: ExamQuestionProps[];
  score: number;
};

const endOfExam = (props: ExamProps) => {
  const { questions, score } = props;
  return (
    <div className="fc-end-of-exam">
      <div className="fc-end-of-exam-score">
        Score: {score} / {questions.length}
      </div>
      <div className="fc-end-of-exam-questions">
        {questions.map((question) => {
          const answerClass =
            question.answer === question.selected
              ? "fc-end-of-exam-question-correct"
              : "fc-end-of-exam-question-incorrect";
          return (
            <div className={"fc-end-of-exam-question " + answerClass}>
              <div>{question.question}</div>
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
