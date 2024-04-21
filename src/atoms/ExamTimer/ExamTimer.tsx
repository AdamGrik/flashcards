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

  const displayHours = Math.floor(counter / 3600);
  const displayMinutes = Math.floor((counter % 3600) / 60);
  const displaySeconds = counter % 60;

  return (
    <div className="fc-timer">
      {displayHours > 0 ? `${displayHours}:` : null}
      {displayMinutes < 10 && displayHours > 0
        ? `0${displayMinutes}`
        : displayMinutes}
      :{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
    </div>
  );
};

export default ExamTimer;
