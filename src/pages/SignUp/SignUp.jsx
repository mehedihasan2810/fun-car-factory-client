import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);

  const navigate = useNavigate();
  const { googleSignIn, signUp, updateUserProfile } = useAuthContext();

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignUpLoading(true);
    signUp(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        console.log(createdUser);

        // * update user profile
        updateUserProfile(createdUser, name, photoUrl)
          .then(() => {})
          .catch((error) => {
            // *show toast
            toast.error(error.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });

            setIsSignUpLoading(false);
          });

        // *show toast
        toast.success("Succesfully Signed Up", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // * reset state
        setEmail("");
        setPassword("");
        setIsSignUpLoading(false);

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

        setIsSignUpLoading(false);
      });
  };

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
      <div className="signup-container">
        <form onSubmit={handleSignUp} className="signup">
          <div className="control">
            <label htmlFor="name">Name: </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              value={photoUrl}
              onChange={(e) => {
                setPhotoUrl(e.target.value);
              }}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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

export default SignUp;
