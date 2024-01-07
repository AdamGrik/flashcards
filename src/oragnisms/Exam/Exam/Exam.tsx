import React, { useEffect, useState } from "react";
import "./Exam.scss";
import Question from "../../../molecules/Question/Question";
import EndOfExam from "../../EndOfExam/EndOfExam";

export type ExamQuestionProps = {
  question: string;
  options: string[];
  answer: string;
  selected?: string;
  questionNumber?: number;
};

type ExamProps = {
  data: ExamQuestionProps[];
};

const Exam = (props: ExamProps) => {
  const { data } = props;
  const [questionsData, setQuestionsData] = useState<ExamQuestionProps[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfExam, setEndOfExam] = useState({ finished: false, score: 0 });

  useEffect(() => {
    const newData = data.map((question, index) => {
      return { ...question, selected: "", questionNumber: index };
    });
    setQuestionsData(newData);
  }, [data]);

  const calculateFinalScore = (questions: ExamQuestionProps[]) => {
    const correctAnswers = questions.filter(
      (question) => question.answer === question.selected
    );
    return correctAnswers.length;
  };

  const handleNext = (selectedOption: string, questionNumber: number) => {
    const newQuestionsData = questionsData.map((question) => {
      if (question.questionNumber === questionNumber) {
        return { ...question, selected: selectedOption };
      }
      return question;
    });

    setQuestionsData(newQuestionsData);

    if (currentQuestion !== data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = calculateFinalScore(newQuestionsData);
      setEndOfExam({ finished: true, score: finalScore });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div>
      {endOfExam.finished ? (
        <EndOfExam
          questions={questionsData}
          score={endOfExam.score}></EndOfExam>
      ) : (
        <Question
          data={questionsData[currentQuestion]}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default Exam;
