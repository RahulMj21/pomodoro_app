import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  FaStopwatch,
  FaStopwatch20,
  FaTimesCircle,
  FaUser,
} from "react-icons/fa";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../utils/firebase";
import toast from "react-hot-toast";
import { User } from "../types";
import UserContext from "../context/UserContext";
import { useRouter } from "next/router";

const auth = getAuth(app);

const Header = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      signOut(auth).then(() => userContext?.setUser(null));
      router.push("/login");
      toast.success("logged out");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section className="border-b border-borderColor">
      <div className="container h-[80px] flex items-center gap-10 justify-between">
        <Link href="/">
          <a>
            <h2 className="flex items-center gap-1 text-xl text-gray-300">
              <FaStopwatch /> Pomodoro
            </h2>
          </a>
        </Link>
        <div className="flex items-center gap-6">
          {userContext?.user && (
            <>
              <p className="text-gray-400 flex items-center gap-2">
                <FaUser /> {userContext.user.displayName}
              </p>

              <button onClick={handleSignOut} className="btn-primary">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
