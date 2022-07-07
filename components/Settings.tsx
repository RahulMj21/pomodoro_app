import React, { useContext } from "react";
import SettingsContext from "../context/SettingsContext";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

interface SettingsProps {
  setShowSettings: Function;
}

const Settings = ({ setShowSettings }: SettingsProps) => {
  const settings = useContext(SettingsContext);

  const settingsArr = [
    {
      label: "Timer :",
      id: "timer",
      value: settings.timer,
      function: settings.setTimer,
    },
    {
      label: "Break :",
      id: "break",
      value: settings.rest,
      function: settings.setRest,
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100%] z-[1]">
      <div
        onClick={() => setShowSettings(false)}
        className=" absolute h-[100%] w-[100%] bg-[rgba(0,0,0,0.7)] backdrop-blur-md"
      ></div>
      <main className="top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] relative bg-gradient-to-bl from-gray-700 to-gray-800 border-l border-b border-gray-600 w-[400px] max-w-[100%] p-6 pt-8 rounded-[16px] flex flex-col items-center gap-5">
        <FaTimes
          onClick={() => setShowSettings(false)}
          className="absolute top-4 right-4 text-2xl text-red-500 cursor-pointer"
        />
        <h1 className="text-3xl mb-4 flex items-center gap-2 underline underline-offset-8 ">
          Settings
        </h1>
        {settingsArr.map((item) => (
          <div className="action-group">
            <label htmlFor="timer" className="text-[22px] tracking-wide">
              {item.label}
            </label>
            <button className="btn-action btn-decrement">
              <FaMinus
                onClick={() => {
                  if (item.value < 2) return;
                  item.function(item.value - 1);
                }}
              />
            </button>
            <input
              className="input"
              type="number"
              id="timer"
              required
              value={item.value}
              onChange={(e) => item.function(Number(e.target.value))}
            />
            <button className="btn-action btn-increment">
              <FaPlus onClick={() => item.function(item.value + 1)} />
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Settings;
