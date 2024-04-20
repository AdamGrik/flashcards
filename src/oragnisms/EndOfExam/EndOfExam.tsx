import React from "react";
import "./EndOfExam.scss";
import { ExamQuestionProps } from "../Exam/Exam/Exam";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import Grade from "../../atoms/Grade/Grade";
import EndOfExamQuestion from "../../molecules/EndOfExamQuestion/EndOfExamQuestion";

type ExamProps = {
  questions: ExamQuestionProps[];
  score: number;
  totalQuestions: number;
};

const EndOfExam = (props: ExamProps) => {
  const { questions, score, totalQuestions } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="fc-end-of-exam">
      <Grade score={score} totalQuestions={totalQuestions}></Grade>
      <div className="fc-main-page-button">
        <Button title="Späť na hlavnú stránku" onClick={handleClick} />
      </div>
      <div className="fc-end-of-exam-questions">
        {questions.map((question, index) => (
          <EndOfExamQuestion key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default EndOfExam;
