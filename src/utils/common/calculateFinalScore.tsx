import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";

export const calculateFinalScore = (questions: ExamQuestionProps[]) => {
  const correctAnswers = questions.filter(
    (question) => question.answer === question.selected
  );
  return correctAnswers.length;
};
