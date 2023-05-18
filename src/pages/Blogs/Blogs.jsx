import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blog-container">
      <h2 className="blogs-title">Blogs</h2>

      <div>
        <div className="blog-center">
          <div>
            <h4>
              Whats the differences between uncontrolled and controlled
              components?
            </h4>
            <p>
              Uncontrolled components in React are those where the state of the
              component is managed by the component itself, without being
              controlled by Reacts state management system. In an uncontrolled
              component, the component handles its own state internally using
              its own state management system, without relying on props or state
              from the parent component.
            </p>
            <p>
              On the other hand, controlled components in React are those where
              the state of the component is managed by Reacts state management
              system, and is passed down to the component via props. In a
              controlled component, the component receives its state values as
              props from the parent component, and it updates its state based on
              these props.
            </p>
          </div>
          <div>
            <h4>How to validate React props using PropTypes?</h4>
            <p>
              React provides a package called PropTypes that allows you to
              define the types of the props passed to a component, and to
              specify if they are required or optional. To use PropTypes, you
              need to first install it using a package manager such as npm or
              yarn:
            </p>
            <pre>npm install prop-types</pre>
            <p>
              Once installed, you can import PropTypes in your React component
              and define the types of the props as follows:
            </p>
            <pre>
              function MyComponent(props) &#123; &#125;
              <pre>
                MyComponent.propTypes = &#123;
                <pre> name: PropTypes.string.isRequired,</pre>
                <pre> age: PropTypes.number,</pre>
                <pre> email: PropTypes.string,</pre>
                <pre>&#125;</pre>
              </pre>
            </pre>
          </div>
          <div>
            <h4>Whats the difference between nodejs and express js?</h4>
            <p>
              Node.js is a runtime environment for executing JavaScript code
              outside of a web browser. It provides a platform for building
              server-side applications using JavaScript.
            </p>
            <p>
              Express.js, on the other hand, is a popular web application
              framework built on top of Node.js. It provides a set of tools and
              libraries for building web applications and APIs in Node.js.
            </p>
          </div>
          <div>
            <h4>
              What is a custom hook and why will you create a custom hook?
            </h4>
            <p>
              In React, a custom hook is a reusable function that encapsulates
              common stateful logic in a way that can be shared across multiple
              components. Custom hooks allow you to extract component logic into
              a separate function and reuse it across different components
              without duplicating code.
            </p>
            <p>
              You might create a custom hook in React to solve a specific
              problem that is not easily solved by a built-in hook or to
              simplify the code of your components. For example, if you have
              multiple components that need to fetch data from a server and
              display it, you could create a custom hook that encapsulates the
              data fetching logic and returns the data and loading/error states
              to the components that use it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
