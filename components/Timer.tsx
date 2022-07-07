import React, { useContext, useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import SettingsContext from "../context/SettingsContext";

interface TimerProps {
  setShowSettings: Function;
}

const Timer = ({ setShowSettings }: TimerProps) => {
  const { timer, rest } = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [minutes, setMinutes] = useState(timer);
  const [seconds, setSeconds] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const [totalSeconds, setTotalSeconds] = useState(timer * 60);
  const [totalSecondsLeft, setTotalSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    setMinutes(timer);
    setTotalSeconds(timer * 60);
    setTotalSecondsLeft(timer * 60);
  }, [timer]);

  const handleResetTimer = () => {
    setMinutes(timer);
    setSeconds(0);
    setPercentage(100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (!isPaused) {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setMinutes(isBreak ? timer - 1 : rest - 1);
            setTotalSeconds(isBreak ? timer * 60 : rest * 60);
            setTotalSecondsLeft(isBreak ? timer * 60 : rest * 60);
            setSeconds(59);
            setPercentage(100);
            setIsBreak(!isBreak);
          }
        } else {
          setSeconds(seconds - 1);
          setTotalSecondsLeft(minutes * 60 + seconds);
          setPercentage((totalSecondsLeft / totalSeconds) * 100);
        }
      }
    }, 1000);
  }, [seconds, isPaused]);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="flex items-center flex-col gap-8">
      <div className="w-[250px] h-[250px]">
        <CircularProgressbar
          value={percentage}
          text={`${formattedMinutes}:${formattedSeconds}`}
          strokeWidth={5.5}
          styles={buildStyles({
            trailColor: "#646669",
            pathColor: "#43bb71",
            textColor: "#43bb71",
          })}
        />
      </div>
      <button
        className="outline-none text-4xl text-gray-300"
        onClick={() => setIsPaused(!isPaused)}
      >
        {isPaused ? <FaPlayCircle /> : <FaPauseCircle />}
      </button>
      {isPaused && totalSecondsLeft < totalSeconds && (
        <button onClick={handleResetTimer} className="btn-primary">
          Reset
        </button>
      )}
      {isPaused && totalSecondsLeft === totalSeconds && (
        <button onClick={() => setShowSettings(true)} className="btn-primary">
          Timer Setup
        </button>
      )}
    </div>
  );
};

export default Timer;
