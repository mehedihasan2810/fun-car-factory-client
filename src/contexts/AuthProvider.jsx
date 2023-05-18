import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

const gooleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
return(
    <AuthContext.Provider value='fooooo'>
        {children}
    </AuthContext.Provider>
)
}

export const useAuthContext = () => {
    return useContext(AuthContext);
  };

export default AuthProvider;