import React from "react";
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
  return <Question data={data[0]} />;
};

export default Exam;
