import { NavLink, useNavigate } from "react-router-dom";
import { FaUserTie, FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import "./Navbar.css";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navContainerRef = useRef();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { currentUser, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // *show toast
        if (currentUser) {
          toast.success("Succesfully Signed Out", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });

          navigate("/");
        }
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

  useLayoutEffect(() => {
    const links = document.querySelectorAll("nav li");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        setIsOpenNav(false);
      });
    });

    ScrollTrigger.observe({
      target: window,
      type: "wheel,touch,scroll,pointer",
      onUp: () => {
        navContainerRef.current.style.transform = "translateY(0%)";
      },
      onDown: () => {
        navContainerRef.current.style.transform = "translateY(-100%)";
        setIsOpenNav(false);
      },
    });
  }, []);

  return (
    <div ref={navContainerRef} className="nav-container">
      <nav>
        <div className="logo-container">
          <img src="/assets/logo.png" alt="logo" width={55} height={55} />
        </div>
        <ul className={isOpenNav ? "open" : ""}>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-toys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-toys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-toy"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Add Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          {currentUser ? (
            <>
              <li>
                {currentUser?.photoURL ? (
                  <img
                    title={currentUser?.displayName}
                    className="profile-img"
                    src={currentUser?.photoURL}
                    alt="user photo"
                    width={40}
                    height={40}
                  />
                ) : (
                  <div title="No Name">
                    <FaUserTie style={{ width: 40, height: 40 }} />
                  </div>
                )}
              </li>
              <li>
                <button onClick={handleSignOut} className="btn-primary">
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/signin">
                <button className="btn-primary">Sign In</button>
              </NavLink>
            </li>
          )}
        </ul>
        <button
          onClick={() => {
            setIsOpenNav(!isOpenNav);
          }}
          className="bar"
        >
          {isOpenNav ? <HiOutlineX /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
