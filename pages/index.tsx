import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Settings from "../components/Settings";
import Timer from "../components/Timer";
import useCheckAuth from "../hooks/useCheckAuth";

const Home: NextPage = () => {
  const { loading } = useCheckAuth();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <section className="relative min-h-[100vh] bg-bgDark text-gray-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <Loader />}
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <Header />
      <div className="container min-h-[calc(100vh - 80px)]">
        <main className="w-[100%] flex flex-col items-center">
          <Timer setShowSettings={setShowSettings} />
        </main>
      </div>
    </section>
  );
};

export default Home;
