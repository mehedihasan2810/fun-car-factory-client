import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "./Root.css";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Root;
