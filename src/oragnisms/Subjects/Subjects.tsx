import React from "react";
import "./subjects.scss";
import Cards from "../../molecules/Cards/Cards";
import { SubjectsData } from "../../utils/SubjectsData";

const Subjects = () => {
  return (
    <div className="fc-subjects">
      <Cards data={SubjectsData}></Cards>
    </div>
  );
};

export default Subjects;
