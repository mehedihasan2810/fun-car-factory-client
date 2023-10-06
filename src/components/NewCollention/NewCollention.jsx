// import { Link } from "react-router-dom";
import "./NewCollention.css";
import { useRef } from "react";

const NewCollention = () => {
  const newCollentionRef = useRef();

  return (
    <div className="new-collection-wrapper">
      <div className="new-collection-left-gradient"></div>
      <div className="new-collection-right-gradient"></div>
      <section
        ref={newCollentionRef}
        className="new-collection-container parallax"
        data-speed="25"
      >
        <div className="new-collection-images-container">
          <img
            src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1519283053578-3efb9d2e71bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>

        <div className="new-collection-info-container">
          <p>New Collection</p>
          <h4>
            Brand New Toys <br /> Just Arrived
          </h4>
          {/* <>Brand New Toys Just Arrived</> */}
          {/* <Link to="#" className="btn-primary">
            Explore
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default NewCollention;
