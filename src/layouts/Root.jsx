import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "./Root.css";
import { useEffect, useRef } from "react";

const Root = () => {
  const loadingElRef = useRef();

  useEffect(() => {
    const initialLoad = () => {
      console.log("loaded");
      loadingElRef.current.style.transform = `translateY(-100%)`;
    };
    window.addEventListener("load", initialLoad);

    return () => {
      window.removeEventListener("load", initialLoad);
    };
  }, []);

  return (
    <>
      <div ref={loadingElRef} className="initial-loading-container">
        <div>
          Fun Car Fact<span className="initial-loader"></span>ry
        </div>
      </div>
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
