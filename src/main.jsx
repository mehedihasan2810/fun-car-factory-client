import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./contexts/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import SmoothScrollProvider from "./contexts/SmoothScrollProvider";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./lib/graphql";
import { SkeletonTheme } from "react-loading-skeleton";
import ContextProvider from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrollProvider>
      <ContextProvider>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <SkeletonTheme baseColor="#f9fafb" highlightColor="#d1d5db">
              <RouterProvider router={router} />
            </SkeletonTheme>
          </AuthProvider>
        </ApolloProvider>
      </ContextProvider>
    </SmoothScrollProvider>
  </React.StrictMode>
);
