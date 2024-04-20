import React from "react";
import "./EndOfExamQuestionQuestion.scss";

type EndOfExamQuestionQuestionProps = {
  textQuestion?: string;
  questionNumber: number;
  image?: any;
  question: string;
};

const EndOfExamQuestionQuestion = (props: EndOfExamQuestionQuestionProps) => {
  const { textQuestion, questionNumber, image, question } = props;
  return (
    <>
      {textQuestion !== undefined ? (
        <div className="fc-end-of-exam-question-question">
          {questionNumber + 1}. {textQuestion}
        </div>
      ) : (
        <div className="fc-end-of-exam-question-question">
          {questionNumber + 1}. {question}
        </div>
      )}
      {image !== undefined ? (
        <div className={`fc-question-img fc-image-${image}`}></div>
      ) : null}
    </>
  );
};

export default EndOfExamQuestionQuestion;
