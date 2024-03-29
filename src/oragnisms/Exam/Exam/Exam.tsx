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
  const [isTimerDone, setIsTimerDone] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const confirmationMessage =
        "Are you sure you want to leave? Your changes may not be saved.";

      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const confirmationMessage =
        "Are you sure you want to leave? Your changes may not be saved.";

      const userConfirmed = window.confirm(confirmationMessage);

      if (!userConfirmed) {
        history.pushState(null, document.title, location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
      {endOfExam.finished || isTimerDone ? (
        <EndOfExam
          questions={questionsData}
          score={endOfExam.score}
          totalQuestions={totalQuestions}></EndOfExam>
      ) : (
        <>
          <ExamTimer
            isTimerDone={setIsTimerDone}
            initialMinutes={initialMinutes}
          />
          <Question
            data={{
              ...questionsData[currentQuestion],
              totalQuestions: totalQuestions,
            }}
            onQuestionChange={handleQuestionChange}
          />
        </>
      )}
    </>
  );
};

export default Exam;
