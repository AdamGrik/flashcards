import React, { useEffect, useState } from "react";
import "./ExamTimer.scss";
type ExamTimerProps = {
  isTimerDone: React.Dispatch<React.SetStateAction<boolean>>;
  initialMinutes: number;
};

const ExamTimer = (props: ExamTimerProps) => {
  const { isTimerDone, initialMinutes } = props;
  const [counter, setCounter] = useState(initialMinutes * 60);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
      return () => clearInterval(timer);
    } else {
      isTimerDone(true);
    }
  }, [counter, isTimerDone]);

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
