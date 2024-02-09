import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";

export const shuffleArray = (questions: ExamQuestionProps[]) => {
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
