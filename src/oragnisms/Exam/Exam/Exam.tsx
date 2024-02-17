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
};

const Exam = (props: ExamProps) => {
  const { data } = props;
  let totalQuestions = data.length;
  if (data.length > 20) {
    totalQuestions = 20;
  }
  const [questionsData, setQuestionsData] = useState<ExamQuestionProps[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfExam, setEndOfExam] = useState({ finished: false, score: 0 });
  const [isTimerDone, setIsTimerDone] = useState(false);

  useEffect(() => {
    const shuffledData = shuffleArray(data);
    const newData = shuffledData.map((question, index) => {
      return { ...question, selected: "", questionNumber: index };
    });
    setQuestionsData(newData);
  }, [data]);
  useEffect(() => {
    if (isTimerDone) {
      const finalScore = calculateFinalScore(questionsData);
      setEndOfExam({ finished: true, score: finalScore });
    }
  }, [isTimerDone, questionsData]);

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
      setCurrentQuestion(nextQuestion ?? currentQuestion + 1);
    } else {
      const finalScore = calculateFinalScore(newQuestionsData);
      setEndOfExam({ finished: true, score: finalScore });
    }
  };

  return (
    <>
      <ExamTimer setIsTimerDone={setIsTimerDone} />
      {endOfExam.finished || isTimerDone ? (
        <EndOfExam
          questions={questionsData}
          score={endOfExam.score}
          totalQuestions={totalQuestions}></EndOfExam>
      ) : (
        <Question
          data={{
            ...questionsData[currentQuestion],
            totalQuestions: totalQuestions,
          }}
          onQuestionChange={handleQuestionChange}
        />
      )}
    </>
  );
};

export default Exam;
