import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./ToyDetails.css";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
const ToyDetails = () => {
  useTitlePerPage("Toy Details");
  const toy = useLoaderData();
  return (
    <div className="details-container">
      <div className="img-galary">
        <img src={toy.url} alt="" />
        <img src={toy.url} alt="" />
        <img src={toy.url} alt="" />
        <img src={toy.url} alt="" />
      </div>
      <div className="details">
        <h4>{toy.name}</h4>
        <p className="price">{toy.price}$</p>
        <p>Category: {toy.category}</p>
        <p>{toy.quantity} pieces available</p>

        <div className="seller">
          <p>Seller: {toy.sellerName}</p>
          <p>Email: {toy.email}</p>
        </div>
        <p className="rating">
          <FaStar style={{ color: "rgb(233, 142, 22)" }} /> {toy.rating}
          /5(100)
        </p>
        <p className="desc">{toy.description}</p>

        <div className="toy-details-btns">
          <button>Buy Now</button>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
