import React, { useEffect, useState } from "react";
import "./ArraySelection.scss";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";
import Checkbox from "../Checkbox/Checkbox";
import { database } from "../../molecules/ExamOptions/ExamOptions";

type arraySelectionProps = {
  data: database[];
  changeData: (e: any) => void;
  changeMaxQuestions: (e: any) => void;
};

const ArraySelection = (props: arraySelectionProps) => {
  const { data, changeData, changeMaxQuestions } = props;
  const checkboxArrays: database[] = data;
  const initialSelectedArrays = checkboxArrays.map(
    (checkboxArray) => checkboxArray.subject
  );
  const [selectedArrays, setSelectedArrays] = useState<string[]>(
    initialSelectedArrays
  );

  const handleCheckboxChange = (label: string) => {
    setSelectedArrays((prevSelectedArrays) => {
      if (prevSelectedArrays.includes(label)) {
        return prevSelectedArrays.filter((item) => item !== label);
      } else {
        return [...prevSelectedArrays, label];
      }
    });
  };
  useEffect(() => {
    handleCheckboxClick();
  }, [selectedArrays]);

  const handleCheckboxClick = () => {
    const newArray: ExamQuestionProps[] = [];

    checkboxArrays.forEach((checkboxArray) => {
      if (selectedArrays.includes(checkboxArray.subject)) {
        newArray.push(...checkboxArray.questions);
      }
    });
    changeData(newArray);
    changeMaxQuestions(newArray.length);
  };

  return (
    <>
      {checkboxArrays.length > 1 ? (
        <div className="fc-exam-options-checkboxes">
          {checkboxArrays.map((checkboxArray) => (
            <>
              <div
                key={checkboxArray.subject}
                className="fc-exam-options-checkbox">
                <Checkbox
                  isChecked={selectedArrays.includes(checkboxArray.subject)}
                  onChange={() => handleCheckboxChange(checkboxArray.subject)}
                />
                <span
                  className="fc-exam-options-checkbox-label"
                  onClick={() => handleCheckboxChange(checkboxArray.subject)}>
                  {checkboxArray.subject}
                </span>
              </div>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ArraySelection;
