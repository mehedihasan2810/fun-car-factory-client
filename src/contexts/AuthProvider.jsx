import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../configs/firebase";

export const AuthContext = createContext();

const gooleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name, url) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, gooleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateCurrentUser = (user) => {
    setCurrentUser(user);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      updateCurrentUser(user);
      setIsAuthLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // console.log(process.env.NODE_ENV)

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        signUp,
        updateUserProfile,
        signIn,
        logOut,
        currentUser,
        isAuthLoading,
        updateCurrentUser,
        // setCurrentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

export default AuthProvider;
