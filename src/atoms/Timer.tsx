import React, { useEffect, useState } from "react";
import { calculateFinalScore } from "../utils/common/calculateFinalScore";

type ExamTimerProps = {
  setIsTimerDone: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExamTimer: React.FC<ExamTimerProps> = ({ setIsTimerDone }) => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
      return () => clearInterval(timer);
    } else {
      setIsTimerDone(true);
    }
  }, [counter, setIsTimerDone]);

  return <>{counter}</>;
};

export default ExamTimer;
