import { ReactNode, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { AuthContextType } from "../../types";

const provider = new GoogleAuthProvider();

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loding, setLoading] = useState(true);

  // signoin with google
  const signingoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // register or signup
  const createUsers = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin or login
  const signinUser = (email: string, password: string) => {
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
    };
  }, []);

  const authInfo: AuthContextType = {
    user,
    loding,
    createUsers,
    signinUser,
    signout,
    signingoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
