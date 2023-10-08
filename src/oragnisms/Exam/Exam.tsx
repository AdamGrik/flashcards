import React, { useState } from "react";
import "./Exam.scss";
import Question from "../../molecules/Question/Question";

export type ExamQuestionProps = {
  question: string;
  options: string[];
  answer: string;
};

type ExamProps = {
  data: ExamQuestionProps[];
};

const Exam = (props: ExamProps) => {
  const { data } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isEndOfExam, setIsEndOfExam] = useState(false);

  const handleNext = (selectedOption: string, answer: string) => {
    if (selectedOption === answer) {
      setScore(score + 1);
    }
    if (currentQuestion !== data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsEndOfExam(true);
    }
  };

  return (
    <div>
      {isEndOfExam ? (
        <div>
          Score : {score} / {currentQuestion + 1}
        </div>
      ) : (
        <Question data={data[currentQuestion]} onNext={handleNext} />
      )}
    </div>
  );
};

export default Exam;
