import GoogleButton from "react-google-button";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
const SignIn = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useAuthContext();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        console.log(loggedUser);

        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
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
    <section>
      <div className="signin-container">
        <form className="signin">
          <div className="control">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="btn-primary" type="submit">
            {false ? <div className="loader"></div> : "Sign In"}
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
            onClick={handleGoogleSignIn}
            type="light"
            className="google-btn"
          />
          <button className="github">Sign in with Github</button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
