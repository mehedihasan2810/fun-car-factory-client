import { NavLink, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
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

  return (
    <div className="center-container">
      <nav>
        <div className="logo-container">
          <img src="/assets/logo.png" alt="" />
          <h4>FunCarFactory</h4>
        </div>
        <ul>
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
              Add A Toy
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
                    alt="user"
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
      </nav>
    </div>
  );
};

export default Navbar;
