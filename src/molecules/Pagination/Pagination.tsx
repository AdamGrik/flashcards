import React from "react";
import "./Pagination.scss";
import Button from "../../atoms/Button/Button";
import { ExamQuestionProps } from "../../oragnisms/Exam/Exam/Exam";

type PaginationProps = {
  selected: number;
  isFinalQuestion: boolean;
  examData: ExamQuestionProps[];
  onPageSelect: (selectedPage: number) => void;
};

const Pagination = (props: PaginationProps) => {
  const { selected, isFinalQuestion, onPageSelect, examData } = props;
  const idOfButtons = (pageNumber: number, data: ExamQuestionProps) => {
    if (pageNumber === selected) return "pagination";
    else if (data.selected !== "") return "answered";
  };

  return (
    <>
      <div className="fc-navigation-buttons">
        <Button
          title="Späť"
          onClick={() => onPageSelect(selected - 1)}
          disabled={selected === 0}
          id="back"
        />
        {isFinalQuestion ? (
          <Button
            title="Koniec testu"
            id="end"
            onClick={() => {
              const userConfirmed: boolean = window.confirm(
                "Ste si istý, že chcete ukončiť test ?"
              );
              if (userConfirmed) {
                onPageSelect(selected + 1);
              }
            }}
          />
        ) : (
          <Button
            title="Ďalej"
            id="next"
            onClick={() => onPageSelect(selected + 1)}
          />
        )}
      </div>
      <div className="fc-pagination">
        <div className="fc-pagination-buttons">
          {examData.map((data, pageNumber) => (
            <Button
              title={(pageNumber + 1).toString()}
              key={pageNumber}
              id={idOfButtons((pageNumber = pageNumber), (data = data))}
              onClick={() => onPageSelect(pageNumber)}></Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
