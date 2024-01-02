import { Link } from "react-router-dom";
import "./NewCollention.css";
import { useRef } from "react";

const NewCollention = () => {
  // Ref for the new collection section
  const newCollentionRef = useRef();

  return (
    // Wrapper section for new collection
    <section className="new-collection-wrapper">
      {/* Gradient backgrounds for the left and right sides */}
      <div className="new-collection-left-gradient"></div>
      <div className="new-collection-right-gradient"></div>

      {/* Main new collection section with parallax effect */}
      <section
        ref={newCollentionRef}
        className="new-collection-container parallax"
        data-speed="25"
      >
        {/* Container for new collection images */}
        <div className="new-collection-images-container">
          {/* First image */}
          <img
            src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />

          {/* Second image */}
          <img
            src="https://images.unsplash.com/photo-1519283053578-3efb9d2e71bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>

        {/* Container for new collection information */}
        <div className="new-collection-info-container">
          {/* Short description */}
          <p>New Collection</p>

          {/* Title */}
          <h2>
            Brand New Toys <br /> Just Arrived
          </h2>
          {/* Link to explore all toys */}
          <Link to="/all-toys" className="btn-primary">
            Explore
          </Link>
        </div>
      </section>
    </section>
  );
};

export default NewCollention;
