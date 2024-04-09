import React, { useEffect, useState } from "react";
import "./ExamTimer.scss";
type ExamTimerProps = {
  initialMinutes: number;
  handleTimeEnd: () => void;
};

const ExamTimer = (props: ExamTimerProps) => {
  const { initialMinutes, handleTimeEnd } = props;
  const [counter, setCounter] = useState(initialMinutes * 60);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
      return () => clearInterval(timer);
    } else {
      handleTimeEnd();
    }
  }, [counter]);

  const displayMinutes = Math.floor(counter / 60);
  const displaySeconds = counter % 60;

  return (
    <div className="fc-timer">
      {displayMinutes}:
      {displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
    </div>
  );
};

export default ExamTimer;
