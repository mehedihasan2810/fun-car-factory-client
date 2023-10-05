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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrollProvider>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ApolloProvider>
    </SmoothScrollProvider>
  </React.StrictMode>
);
