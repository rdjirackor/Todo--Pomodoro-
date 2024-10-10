import React, { useState, useEffect } from 'react';
import '../Styles/Timer.css';
import Start from './Start';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1 * 60); 
  const [isActive, setIsActive] = useState(false);   

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive, timeLeft]);

  return (
    <div className="timer-container">
      <div className="circle">
        <div className="time">{formatTime(timeLeft)}</div>
      </div>
      <Start onClick={toggleTimer} isActive={isActive} />
    </div>
  );
};

export default Timer;
