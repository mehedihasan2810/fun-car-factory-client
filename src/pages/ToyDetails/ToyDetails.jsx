import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./ToyDetails.css";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useQuery } from "@apollo/client";
import { GET_CAR } from "../../lib/graphql/queryDefs";
import Skeleton from "react-loading-skeleton";
const ToyDetails = () => {
  useTitlePerPage("Toy Details");

  const params = useParams();

  const {
    data: toyData,
    loading,
    error,
  } = useQuery(GET_CAR, {
    variables: { id: params.id },
  });

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="details-container">
      <div className="img-galary">
        {loading ? (
          <>
            <Skeleton
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <Skeleton
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <Skeleton
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <Skeleton
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </>
        ) : (
          <>
            <img src={toyData.getCar.url} alt="" />
            <img src={toyData.getCar.url} alt="" />
            <img src={toyData.getCar.url} alt="" />
            <img src={toyData.getCar.url} alt="" />
          </>
        )}
      </div>
      <div className="details">
        {loading ? <Skeleton /> : <h4>{toyData.getCar.name}</h4>}

        {loading ? (
          <Skeleton />
        ) : (
          <p className="price">{toyData.getCar.price}$</p>
        )}
        {loading ? <Skeleton /> : <p>Category: {toyData.getCar.category}</p>}
        {loading ? (
          <Skeleton />
        ) : (
          <p>{toyData.getCar.quantity} pieces available</p>
        )}

        <div className="seller">
          {loading ? <Skeleton /> : <p>Seller: {toyData.getCar.sellerName}</p>}
          {loading ? <Skeleton /> : <p>Email: {toyData.getCar.email}</p>}
        </div>
        <p className="rating">
          <FaStar style={{ color: "rgb(233, 142, 22)" }} />{" "}
          {loading ? "0" : toyData.getCar.rating}
          /5(100)
        </p>
        {loading ? (
          <Skeleton />
        ) : (
          <p className="desc">{toyData.getCar.description}</p>
        )}

        <div className="toy-details-btns">
          <button>Buy Now</button>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
