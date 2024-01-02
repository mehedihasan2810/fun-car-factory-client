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

// Create authentication context
export const AuthContext = createContext();

// Create GoogleAuthProvider instance
const gooleProvider = new GoogleAuthProvider();

// AuthProvider component for managing authentication state
const AuthProvider = ({ children }) => {
  // State for current user
  const [currentUser, setCurrentUser] = useState(null);

  // State for authentication loading status
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // State for access token
  const [accessToken, setAccessToken] = useState(null);

  // Function to sign up a user
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to update user profile
  const updateUserProfile = (user, name, url) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  // Function to sign in a user
  const signIn = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Query to get token from the server
    const { data } = await apolloClient.query({
      query: GET_TOKEN,
      variables: { email: email },
    });

    // Set the token in cookies and state
    Cookies.set("token", data.getToken.token);
    setAccessToken(data.getToken.token);

    return userCredentials;
  };

  // Function to sign in with Google
  const googleSignIn = async () => {
    // Sign in with Google popup
    const userCredential = await signInWithPopup(auth, gooleProvider);

    // Save user to the database
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

    // Set the token in cookies and state
    Cookies.set("token", data.createUser.token);
    setAccessToken(data.createUser.token);

    return userCredential;
  };

  // Function to log out the user
  const logOut = async () => {
    // Sign out from Firebase authentication
    await signOut(auth);

    // Remove token from cookies
    Cookies.remove("token");

    // Clear Apollo Client store
    apolloClient.clearStore();

    // Set access token to null
    setAccessToken(null);
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });

    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  // Provide authentication context to the components
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
