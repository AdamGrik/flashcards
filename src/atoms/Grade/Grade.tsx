import React from "react";
import "./Grade.scss";
type GradeProps = {
  score: number;
  totalQuestions: number;
};

const Grade = (props: GradeProps) => {
  const { score, totalQuestions } = props;
  const percentage: number = (score / totalQuestions) * 100;
  const percentageColor =
    percentage > 32 ? "fc-percentage-color-pass" : "fc-percentage-color-fail";
  let grade: number;
  switch (true) {
    case percentage > 89:
      grade = 1;
      break;
    case percentage > 74:
      grade = 2;
      break;
    case percentage > 49:
      grade = 3;
      break;
    case percentage > 32:
      grade = 4;
      break;
    default:
      grade = 5;
  }
  return (
    <>
      <div className="fc-end-of-exam-score">
        Skóre: {score} / {totalQuestions}
      </div>
      <div className={"fc-percentage " + percentageColor}>
        {Math.round(percentage)} %
      </div>
      <div className="fc-grade-and-number">
        <div className="fc-grade">Známka: </div>
        <div className="fc-grade-number">{grade}</div>
      </div>
    </>
  );
};
export default Grade;
