import React from "react";
import { SettingsContextType } from "../types";

const SettingsContext = React.createContext<SettingsContextType>({
  timer: 0,
  rest: 0,
  setTimer: () => {},
  setRest: () => {},
});
export default SettingsContext;
