import { Link } from "react-router-dom";
import "./SignUp.css";
import GoogleButton from "react-google-button";
const SignUp = () => {
  return (
    <section>
      <div className="signup-container">
        <form className="signup">
          <div className="control">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="url">Photo Url: </label>
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Photo Url"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn-primary" type="submit">
            {false ? <div className="loader"></div> : "Sign Up"}
          </button>
        </form>
        <p className="account">
          Already have an account?{" "}
          <Link className="acc" to="/signin">
            SingIn
          </Link>
        </p>
        <div className="section-title">
          <h4>OR</h4>
        </div>
        <div className="google-github">
          <GoogleButton type="light" className="google-btn" />
          <button className="github">Sign in with Github</button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
