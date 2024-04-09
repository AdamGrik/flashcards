import React, { useEffect, useState } from "react";
import "./Exam.scss";
import Question from "../../../molecules/Question/Question";
import EndOfExam from "../../EndOfExam/EndOfExam";
import { shuffleArray } from "../../../utils/common/shuffleArray";
import { calculateFinalScore } from "../../../utils/common/calculateFinalScore";
import ExamTimer from "../../../atoms/ExamTimer/ExamTimer";

export type ExamQuestionProps = {
  question: string;
  options: string[];
  answer: string;
  image?: string;
  selected?: string;
  questionNumber?: number;
  totalQuestions?: number;
  text?: string;
  textQuestion?: string;
  subQuestionId?: number;
};
type ExamProps = {
  data: ExamQuestionProps[];
  totalQuestions: number;
  initialMinutes: number;
};

const Exam = (props: ExamProps) => {
  const { data, totalQuestions, initialMinutes } = props;
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

  const finishExam = () => {
    const finalScore = calculateFinalScore(questionsData);
    setEndOfExam({ finished: true, score: finalScore });
  };

  const handleQuestionChange = (
    selectedOption: string,
    questionNumber: number,
    nextQuestion: number
  ) => {
    const newQuestionsData = questionsData.map((question) => {
      if (question.questionNumber === questionNumber) {
        return { ...question, selected: selectedOption };
      }
      return question;
    });

    setQuestionsData(newQuestionsData);

    if (nextQuestion <= totalQuestions - 1) {
      setCurrentQuestion(nextQuestion);
    } else {
      finishExam();
    }
  };

  return (
    <>
      {endOfExam.finished ? (
        <EndOfExam
          questions={questionsData}
          score={endOfExam.score}
          totalQuestions={totalQuestions}></EndOfExam>
      ) : (
        <>
          <ExamTimer
            initialMinutes={initialMinutes}
            handleTimeEnd={finishExam}
          />
          <Question
            data={{
              ...questionsData[currentQuestion],
              totalQuestions: totalQuestions,
            }}
            examData={questionsData}
            onQuestionChange={handleQuestionChange}
          />
        </>
      )}
    </>
  );
};

export default Exam;
