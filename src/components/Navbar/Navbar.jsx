import { NavLink, useNavigate } from "react-router-dom";
import { FaUserTie, FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { toast } from "react-toastify";
import "./Navbar.css";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAuthContext } from "../../contexts/useAuthContext";
import useContextProvider from "../../contexts/useContextProvider";
import Cookies from "js-cookie";
import { apolloClient } from "../../lib/graphql";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navContainerRef = useRef();
  const [isOpenNav, setIsOpenNav] = useState(false);

  const { totalCartToys } = useContextProvider();
  // checkTotalCartToys();
  const { currentUser, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();

      Cookies.remove("token");

      apolloClient.resetStore();

      toast.success("Succesfully Signed Out", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      navigate("/");
    } catch (error) {
      // *show toast
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }

    // logOut()
    //   .then(() => {
    //     // *show toast
    //     if (currentUser) {
    //       toast.success("Succesfully Signed Out", {
    //         position: toast.POSITION.TOP_CENTER,
    //         autoClose: 2000,
    //       });

    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => {
    //     // *show toast
    //     toast.error(error.message, {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 2000,
    //     });
    //   });
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
          {/* {currentUser && <li data-testid="foo">Foooo</li>} */}

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
          {currentUser ? (
            <>
              <li>
                {currentUser?.photoURL ? (
                  <img
                    data-testid="nav-user-img"
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
                <button
                  data-testid="signOut"
                  onClick={handleSignOut}
                  className="btn-primary"
                >
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

          <li className="nav-favorite-list">
            <NavLink to="/favorites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </NavLink>
          </li>
          <li className="nav-cart-list">
            <NavLink to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="nav-cart-count">{totalCartToys}</div>
            </NavLink>
          </li>
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
