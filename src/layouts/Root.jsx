import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import './Root.css'

const Root = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
      <ToastContainer />
      <div className="fixed-background">
        <div className="texture"></div>
        <div className="dark-texture-layer"></div>
      </div>
      {/* <img className="texture-bg-img"  src="../../public/assets/texture-bg2.avif" alt="texture background image" /> */}
    </main>
  );
};

export default Root;
