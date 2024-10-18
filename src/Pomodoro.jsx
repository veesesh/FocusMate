import React, { useState, useEffect } from "react";
import "./index.css";

const Pomodoro = () => {
  // 1500 is 25 x 60 s
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);

  //  time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Start timer
  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  // Pause timer
  const pauseTimer = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  // Reset timer when  reaached 1500 s
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500);
  };

  // countdown
  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false); // Stop
      alert("Pomodoro session complete!");
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  return (
    <div className="container">
      <h1 className="title">Focus Timer </h1>
      <div className="timer">{formatTime(timeLeft)}</div>
      <div className="buttons">
        <button className="start-btn" onClick={startTimer}>
          Start
        </button>
        <button className="pause-btn" onClick={pauseTimer}>
          Pause
        </button>
        <button className="reset-btn" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
