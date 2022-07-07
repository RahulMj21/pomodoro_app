import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { app } from "../utils/firebase";

const auth = getAuth(app);

const useCheckAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        if (email && displayName && photoURL) {
          userContext?.setUser({ displayName, email, photoURL });
          setLoading(false);
          router.push("/");
        }
      } else {
        setLoading(false);
        router.push("/login");
      }
    });
  }, []);

  return {
    user: userContext?.user ? userContext.user : null,
    loading,
  } as const;
};

export default useCheckAuth;
