import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ProtectedRoute from "./ProtectedRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Favorites from "../pages/Favorites/Favorites";

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
        loader: () =>
          fetch("https://fun-car-factory-server.vercel.app/all-toys"),
      },
      {
        path: "/my-toys",
        element: (
          <ProtectedRoute>
            <MyToys />
          </ProtectedRoute>
        ),
        loader: () =>
          fetch("https://fun-car-factory-server.vercel.app/all-toys"),
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
          fetch(
            `https://fun-car-factory-server.vercel.app/toy-details/${params.id}`
          ),
      },
      {
        path: "/my-toys/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://fun-car-factory-server.vercel.app/toy-details/${params.id}`
          ),
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
