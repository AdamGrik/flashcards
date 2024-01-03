import React, { useEffect, useState } from "react";
import "./Exam.scss";
import Question from "../../../molecules/Question/Question";

export type ExamQuestionProps = {
  question: string;
  options: string[];
  answer: string;
  selected?: string;
};

type ExamProps = {
  data: ExamQuestionProps[];
};

const Exam = (props: ExamProps) => {
  const { data } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const [isEndOfExam, setIsEndOfExam] = useState(false);

  const handleNext = (selectedOption: string, answer: string) => {
    const currentAnswers = [...answers, answer];

    setAnswers(currentAnswers);

    if (selectedOption === answer) {
      setScore(score + 1);
    }
    if (currentQuestion !== data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsEndOfExam(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div>
      {isEndOfExam ? (
        <div className="end-of-exam">
          Score: {score} / {currentQuestion + 1}
        </div>
      ) : (
        <Question
          data={data[currentQuestion]}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default Exam;
