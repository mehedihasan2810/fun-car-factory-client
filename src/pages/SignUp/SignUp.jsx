import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useState } from "react";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useAuthContext } from "../../contexts/useAuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../lib/graphql/queryDefs";
import Cookies from "js-cookie";

const SignUp = () => {
  useTitlePerPage("Sign Up");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn, signUp, updateUserProfile } = useAuthContext();

  const [createUser] = useMutation(CREATE_USER);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSignUpLoading(true);

    try {
      const userCredential = await signUp(email, password);

      await updateUserProfile(userCredential.user, name, photoUrl);

      createUser({
        variables: {
          input: {
            name,
            email,
            role: "user",
          },
        },
        onCompleted: ({ createUser }) => {
          console.log("user created");

          Cookies.set("token", createUser.token, { expires: 30 });
        },
        onError: (error) => {
          console.error(error);
        },
      });

      // * reset state
      setEmail("");
      setPassword("");
      setIsSignUpLoading(false);

      // *show toast
      toast.success("Succesfully Signed Up", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      // *redirect user
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      setIsSignUpLoading(false);
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
              type={`${isShowPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <label className="signup_show_password" htmlFor="show_password">
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
          <button type="submit">
            {isSignUpLoading ? <div className="loader"></div> : "Sign Up"}
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

export default SignUp;
