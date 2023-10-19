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
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";
import AdminRoute from "./AdminRoute";
import { getUserLoader } from "./loaders/getUserLoader";

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
      },
      {
        path: "/my-toys",
        element: (
          <AdminRoute>
            <MyToys />
          </AdminRoute>
        ),
        loader: getUserLoader,
      },
      {
        path: "/add-toy",
        element: (
          <AdminRoute>
            <AddToy />
          </AdminRoute>
        ),
        loader: getUserLoader,
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails />,
      },
      {
        path: "/my-toys/:id",
        element: (
          <AdminRoute>
            <UpdateToy />
          </AdminRoute>
        ),
        loader: getUserLoader,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
