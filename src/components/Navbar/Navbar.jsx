import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="center-container">
      <nav>
        <div className="logo-container">
          <img src="/assets/logo.png" alt="" />
          <h4>FunCarFactory</h4>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-toys">All Toys</NavLink>
          </li>
          <li>
            <NavLink to="/my-toys">My Toys</NavLink>
          </li>
          <li>
            <NavLink to="/add-toy">Add A Toy</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            {false ? (
              <NavLink to="/">Profile</NavLink>
            ) : (
              <NavLink to="/signin">
                <button className="btn-primary">Sign In</button>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
