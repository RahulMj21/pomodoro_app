import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import SettingsContext from "../context/SettingsContext";
import UserContext from "../context/UserContext";
import { User } from "../types";

function MyApp({ Component, pageProps }: AppProps) {
  const [timer, setTimer] = useState(25);
  const [rest, setRest] = useState(5);
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SettingsContext.Provider value={{ timer, rest, setTimer, setRest }}>
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </SettingsContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
