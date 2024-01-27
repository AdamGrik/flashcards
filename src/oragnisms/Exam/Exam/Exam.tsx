import React, { useEffect, useState } from "react";
import "./Exam.scss";
import Question from "../../../molecules/Question/Question";
import EndOfExam from "../../EndOfExam/EndOfExam";

export type ExamQuestionProps = {
  question: string;
  options: string[];
  answer: string;
  image?: any;
  selected?: string;
  questionNumber?: number;
  totalQuestions?: number;
};

type ExamProps = {
  data: ExamQuestionProps[];
};

const Exam = (props: ExamProps) => {
  const { data } = props;
  const totalQuestions = data.length;
  const [questionsData, setQuestionsData] = useState<ExamQuestionProps[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfExam, setEndOfExam] = useState({ finished: false, score: 0 });

  useEffect(() => {
    const shuffledData = shuffleArray(data);
    const newData = shuffledData.map((question, index) => {
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
  const shuffleArray = (array: any[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
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
          data={{
            ...questionsData[currentQuestion],
            totalQuestions: totalQuestions,
          }}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default Exam;
