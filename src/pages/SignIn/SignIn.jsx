import GoogleButton from "react-google-button";
import "./SignIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useAuthContext } from "../../contexts/useAuthContext";

const SignIn = () => {
  useTitlePerPage("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn, signIn } = useAuthContext();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsSignInLoading(true);

    try {
      await signIn(email, password);

      // *show toast
      toast.success("Succesfully Signed In", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      // * reset state
      setEmail("");
      setPassword("");
      setIsSignInLoading(false);

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      // *show toast
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      setIsSignInLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleSignInLoading(true);
      await googleSignIn();

      setIsGoogleSignInLoading(false);

      // *show toast
      toast.success("Succesfully Signed In", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      // *redirect user
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      // *show toast
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <section>
      <div className="signin-container">
        <form onSubmit={handleSignIn} className="signin">
          <div className="control">
            <label htmlFor="email">Email: </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Your Email..."
            />
          </div>
          <div className="control">
            <label htmlFor="password">Password: </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={`${isShowPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Your Password..."
            />
            <label className="signin_show_password" htmlFor="show_password">
              {" "}
              <input
                onChange={() => setIsShowPassword(!isShowPassword)}
                type="checkbox"
                name="show_password"
                id="show_password"
              />{" "}
              Show Password
            </label>
          </div>
          <button className="auth-btn" type="submit">
            {isSignInLoading ? <div className="loader"></div> : "Sign In"}
          </button>
        </form>
        <p className="account">
          Don&#39;t have an account?{" "}
          <Link className="acc" to="/signup">
            SingUp
          </Link>
        </p>
        <div className="section-title">
          <h4>OR</h4>
        </div>
        <div className="google-github">
          <GoogleButton
            label={
              isGoogleSignInLoading ? "Signing In..." : "Sign in with Google"
            }
            disabled={isGoogleSignInLoading}
            onClick={handleGoogleSignIn}
            // type="light"
            className="google-btn"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
