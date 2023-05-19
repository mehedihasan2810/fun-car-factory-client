import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Blogs from "../pages/Blogs/Blogs";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:4000/allToys"),
      },
      {
        path: "/my-toys",
        element: (
          <ProtectedRoute>
            <MyToys />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <ProtectedRoute>
            <AddToy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/toy-details/:id",
        element: (
          <ProtectedRoute>
            <ToyDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/toy-details/${params.id}`),
      },
    ],
  },
]);
