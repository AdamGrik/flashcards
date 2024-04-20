import React from "react";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import "./EndOfExamQuestion.scss";
import EndOfExamQuestionOption from "../../atoms/EndOfExamQuestionOption/EndOfExamQuestionOption";
import EndOfExamQuestionQuestion from "../../atoms/EndOfExamQuestionQuestion/EndOfExamQuestionQuestion";

type EndOfExamQuestionProps = { question: ExamQuestionProps };

const EndOfExamQuestion = (props: EndOfExamQuestionProps) => {
  const { question } = props;
  const answerClass =
    question.answer === question.selected
      ? "fc-end-of-exam-question-correct"
      : "fc-end-of-exam-question-incorrect";

  return question && question.questionNumber !== undefined ? (
    <div className={"fc-end-of-exam-question " + answerClass}>
      <EndOfExamQuestionQuestion
        textQuestion={question.textQuestion}
        questionNumber={question.questionNumber}
        question={question.question}
        image={question.image}
      />
      <div className="fc-end-of-exam-question-options">
        {question.options.map((option, index) => (
          <div key={index}>
            <EndOfExamQuestionOption
              option={option}
              selected={question.selected}
              answer={question.answer}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
export default EndOfExamQuestion;
