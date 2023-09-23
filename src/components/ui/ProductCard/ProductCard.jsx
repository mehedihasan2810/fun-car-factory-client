import "./ProductCard.css";
const ProductCard = ({data}) => {
  console.log(data)
  return (
    <div className="product-card">
      {/* <div className="product-card-img"> */}
        <img 
        className="product-card-img"
          src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt=""
        />
      {/* </div> */}
      <div className="product-card-content">
        <img
          className="product-card-bg-img"
          src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt=""
        />
        <div className="product-card-content-layer">
          <div className="product-card-info">
            <div className="product-card-info-top">
              <h2 className="product-card-title">amazing car</h2>
              <div className="product-card-price">$100</div>
            </div>

            <div className="product-card-info-bottom">
              <div>Best Seller</div>
              <div>In Stock</div>
            </div>
          </div>

          <hr />

          <div className="product-card-btns">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-primary">Add To Bag</button>
            <button className="product-card-favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
