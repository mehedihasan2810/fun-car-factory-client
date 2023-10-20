import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../configs/firebase";
import { apolloClient } from "../lib/graphql";
import { CREATE_USER, GET_TOKEN } from "../lib/graphql/queryDefs";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const gooleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name, url) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  const signIn = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { data } = await apolloClient.query({
      query: GET_TOKEN,
      variables: { email: email },
    });

    Cookies.set("token", data.getToken.token);

    setAccessToken(data.getToken.token);

    return userCredentials;
  };

  const googleSignIn = async () => {
    const userCredential = await signInWithPopup(auth, gooleProvider);

    // save user to db
    const { data } = await apolloClient.mutate({
      mutation: CREATE_USER,
      variables: {
        input: {
          email: userCredential.user.email,
          name: userCredential.user.displayName,
          role: "user",
        },
      },
    });
    Cookies.set("token", data.createUser.token);

    setAccessToken(data.createUser.token);

    return userCredential;
  };

  const logOut = async () => {
    await signOut(auth);

    Cookies.remove("token");

    apolloClient.clearStore();

    setAccessToken(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
