import React from "react";
import "./Pagination.scss";
import Button from "../../atoms/Button/Button";

type PaginationProps = {
  totalPages: number;
  selected: number;
  isFinalQuestion: boolean;
  onPageSelect?: (selectedPage: number) => void;
};

const Pagination = (props: PaginationProps) => {
  const { totalPages, selected, isFinalQuestion, onPageSelect } = props;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const handlePageSelect = (selectedPage: number) => {
    if (onPageSelect) {
      onPageSelect(selectedPage);
    }
  };

  return (
    <div className="fc-pagination">
      <Button
        title="Späť"
        onClick={() => handlePageSelect(selected - 1)}
        disabled={selected === 0}
        id="back"
      />
      {pageNumbers.map((pageNumber) => (
        <Button
          title={pageNumber.toString()}
          key={pageNumber}
          id={pageNumber === selected + 1 ? "pagination" : undefined}
          onClick={() => handlePageSelect(pageNumber - 1)}></Button>
      ))}
      {isFinalQuestion ? (
        <Button
          title="Koniec testu"
          id="end"
          onClick={() => handlePageSelect(selected + 1)}
        />
      ) : (
        <Button
          title="Ďalej"
          id="next"
          onClick={() => handlePageSelect(selected + 1)}
        />
      )}
    </div>
  );
};

export default Pagination;
