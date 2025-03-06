import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";

const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loding, setLoading] = useState(true);

  // signoin with google

  const signingoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // register or signup
  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin or login
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signout or logout
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // save the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
      if (user) {
        alert("we hace");
      }
    };
  }, []);

  const authInfo = {
    user,
    loding,
    createUsers,
    signinUser,
    signout,
    signingoogle,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
