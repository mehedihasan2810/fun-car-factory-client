import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div>
        <h1>Not Found 404!</h1>

        <p>The page you were looking for doesnt seem to exist!</p>
        <img
          src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Not Found Image"
        />

        <Link className="link" to="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
