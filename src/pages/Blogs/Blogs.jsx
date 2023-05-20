import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import "./Blogs.css";
const Blogs = () => {
  useTitlePerPage('Blogs')
  return (
    <div className="blog-container">
      <h2 className="blogs-title">Blogs</h2>

      <div>
        <div className="blog-center">
          <div>
            <h4>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h4>
            <p>
              Access Token: An access token is a credential that is issued by an
              authentication server upon successful authentication. It
              represents the authorization granted to access specific resources
              or perform certain actions on behalf of the user or application.
            </p>
            <p>
              Refresh Token: A refresh token is also issued by the
              authentication server along with the access token. It is a
              long-lived credential that is used to obtain a new access token
              when the current one expires.
            </p>
            <p>heres how they work: </p>
            <ul>
              <li>
                The client-side application e.g., a web or mobile app
                authenticates the user by sending their credentials to the
                authentication server.
              </li>
              <li>
                Upon successful authentication, the authentication server issues
                an access token and a refresh token.
              </li>
              <li>
                The client-side application stores the access token in memory or
                a secure storage mechanism for immediate use.
              </li>
              <li>
                The refresh token is securely stored by the client-side
                application, typically in a location that provides protection
                against unauthorized access.
              </li>
            </ul>
            <p>
              Its important to store tokens securely on the client-side to
              prevent unauthorized access. Best practices include using secure
              storage mechanisms provided by the platform or framework youre
              using and encrypting the tokens when necessary. Additionally, you
              should follow any security guidelines provided by the
              authentication server or framework youre using to ensure the
              proper handling and storage of tokens.
            </p>
          </div>
          <div>
            <h4>Differences between SQL and NoSQL databases?</h4>
            <p>SQL Databases:</p>
            <ul>
              <li>Relational data model</li>
              <li>Use structured query language SQL for data manipulation</li>
              <li>Fixed schema with predefined tables and columns</li>
            </ul>
            <p>NoSQL Databases: </p>
            <ul>
              <li>
                Various data models: key-value, document, columnar, graph, etc.
              </li>
              <li>Use non-SQL or schema-less query languages</li>
              <li>Flexible schema with dynamic or no predefined structure</li>
            </ul>
          </div>
          <div>
            <h4>What is express js and Nest JS?</h4>
            <p>
              Express js: Express.js is a minimal and unopinionated web
              framework for Node.js. It provides a simple and flexible set of
              features for building web applications and APIs. Express.js
              focuses on being lightweight and allows developers to have more
              control over the application structure and middleware
              configuration.
            </p>

            <p>
              Nest js:- Nest.js is a progressive, opinionated framework for
              building scalable and maintainable server-side applications using
              TypeScript. It is built on top of Express.js, taking advantage of
              its robustness and features, and adds an additional layer of
              abstraction and structure. Nest.js follows the modular design
              pattern and provides a built-in dependency injection system for
              managing application components and their dependencies.
            </p>
          </div>
          <div>
            <h4>What is MongoDB aggregate and how does it work?</h4>
            <p>
              In MongoDB, the aggregate function is used to perform advanced
              data processing and analysis operations on the data stored in a
              collection. It allows you to execute complex queries, perform
              aggregations, and transform the data in various ways. The
              aggregate function takes an array of stages as its argument, where
              each stage represents a specific operation or transformation to be
              applied to the data.
            </p>
            <p>
              Heres a high-level overview of how the aggregate function works:
              Data Pipeline: The aggregate function processes data using a
              concept called the aggregation pipeline. The pipeline consists of
              a sequence of stages that are executed in order, with the output
              of one stage serving as the input for the next stage. Stages: Each
              stage in the pipeline performs a specific operation on the data.
              Some commonly used stages include: $match: Filters documents based
              on specified criteria. $group: Groups documents together based on
              a specific field and performs aggregations on the grouped data.
              $project: Selects specific fields from the documents and
              optionally transforms them. $sort: Sorts the documents based on
              specified criteria. $limit: Limits the number of documents in the
              result set. $skip: Skips a specified number of documents in the
              result set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
