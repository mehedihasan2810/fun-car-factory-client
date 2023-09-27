import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="cart-container">
      <div className="cart-toys-wrapper">
        <p
          className="cart-count"
          style={{
            marginBlockEnd: `${0 ? "400px" : "10px"}`,
          }}
        >
          You have added 10 toys
        </p>
        {Array.from({ length: 10 }).map((_, index) => (
          <FavoriteCard key={index} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-header">Summery</div>

        <div className="cart-summary-subtotal-wrapper">
            <div className="cart-summary-subtotal">
              <div>Subtotal</div>
              <div>$ 7829.00</div>
            </div>

            <div className="cart-summary-delivery">
                <div>Delivery Charge</div>
                <div>$ 10.00</div>
            </div>
        </div>

        <div className="cart-summary-total">
            <div>Total</div>
            <div>$ 8010.00</div>
        </div>

        <button className="cart-summary-checkout-btn">Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
