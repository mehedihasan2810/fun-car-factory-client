import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
      <main>
        <Navbar />
        <Outlet />
        <Footer/>
        {/* <ToastContainer /> */}
      </main>
    );
  };
  
  export default Root;