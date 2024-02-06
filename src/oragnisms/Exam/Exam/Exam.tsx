import React, { useEffect, useState } from "react";
import "./Exam.scss";
import Question from "../../../molecules/Question/Question";
import EndOfExam from "../../EndOfExam/EndOfExam";

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
  const shuffleArray = (questions: ExamQuestionProps[]) => {
    const shuffledArray = questions.sort(() => Math.random() - 0.5);

    const groupedArray = shuffledArray.reduce(
      (acc: ExamQuestionProps[][], obj) => {
        const subQuestionId = obj.subQuestionId;
        const existingGroup = acc.find(
          (group: any) => group[0].subQuestionId === subQuestionId
        );
        if (existingGroup) {
          existingGroup.push(obj);
        } else {
          acc.push([obj]);
        }

        return acc;
      },
      []
    );

    const finalArray = groupedArray.flat();

    return finalArray;
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
      setCurrentQuestion(nextQuestion ?? currentQuestion + 1);
    } else {
      const finalScore = calculateFinalScore(newQuestionsData);
      setEndOfExam({ finished: true, score: finalScore });
    }
  };
  if (data.length > 21) {
    totalQuestions = 20;
  }
  return (
    <>
      {endOfExam.finished ? (
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
