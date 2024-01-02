import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { toast } from "react-toastify";
import "./Navbar.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAuthContext } from "../../contexts/useAuthContext";
import useContextProvider from "../../contexts/useContextProvider";
import Cookies from "js-cookie";
import { apolloClient } from "../../lib/graphql";
import { GET_USER } from "../../lib/graphql/queryDefs";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  // Ref to the navigation container
  const navContainerRef = useRef();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [user, setUser] = useState(null);

  const { totalCartToys } = useContextProvider();

  const { currentUser, logOut, accessToken } = useAuthContext();
  const navigate = useNavigate();

  // Function to handle user sign-out
  const handleSignOut = async () => {
    try {
      await logOut();

      // Show success toast on sign-out
      toast.success("Succesfully Signed Out", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      navigate("/");
    } catch (error) {
      // Show error toast on failure
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  // Fetch user information on component mount or when the access token changes
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setUser(null);
        return;
      }
      const decoded = jwtDecode(token);

      const { data } = await apolloClient.query({
        query: GET_USER,
        variables: { email: decoded.email },
      });

      setUser(data?.getUser);
    };

    fetchUser();
  }, [accessToken]);

  // Add event listener to close the navigation menu on link click
  useLayoutEffect(() => {
    const links = document.querySelectorAll("nav li");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        setIsOpenNav(false);
      });
    });
  }, []);

  return (
    <div ref={navContainerRef} className="nav-container">
      <nav>
        <div className="logo-container">
          <img src="/assets/logo.png" alt="logo" width={55} height={55} />
        </div>
        <ul className={isOpenNav ? "open" : ""}>
          {/* Navigation links */}
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
          {user?.role === "admin" && (
            <>
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
            </>
          )}

          {/* Conditional rendering based on user authentication */}
          {currentUser ? (
            <>
              <li>
                {/* Display user photo or default avatar */}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    width={32}
                    height={32}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </li>
              <li>
                {/* Button for signing out */}
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
              {/* Link to sign-in page */}
              <NavLink to="/signin">
                <button className="btn-primary">Sign In</button>
              </NavLink>
            </li>
          )}

          {/* Favorites and Cart icons with counts */}
          <li className="nav-favorite-list">
            <NavLink to="/favorites" aria-label="Visit favorite toys page">
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
            <NavLink to="/cart" aria-label="Visit cart page">
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

              {/* Display total number of items in the cart */}
              <div className="nav-cart-count" aria-hidden={true}>{totalCartToys}</div>
            </NavLink>
          </li>
        </ul>

        {/* Button to toggle the navigation menu */}
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
