import { useQuery } from "@apollo/client";
import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Cart.css";
import { GET_CART_CAR } from "../../lib/graphql/queryDefs";
import useContextProvider from "../../contexts/useContextProvider";
import deleteFromLocalStorage from "../../utils/deleteFromLocalStorage";
import { cache } from "../../lib/graphql";

const Cart = () => {
  const { cartIds } = useContextProvider();
  const { data, loading } = useQuery(GET_CART_CAR, {
    variables: { cartIds },
  });

  console.log(data);

  return (
    <section className="cart-container">
      <div className="cart-toys-wrapper">
        <p
          className="cart-count"
          style={{
            marginBlockEnd: `${
              loading || data?.getCartCar?.length ? "10px" : "400px"
            }`,
          }}
        >
          You have added {loading ? "0" : data?.getCartCar?.length} toys
        </p>
        {(loading ? Array.from({ length: 1 }) : data.getCartCar).map(
          (item, index) => (
            <FavoriteCard
              key={loading ? index : item.id}
              {...item}
              deleteItem={() => {
                deleteFromLocalStorage("cart", item.id);

                cache.updateQuery(
                  {
                    query: GET_CART_CAR,
                    variables: { cartIds },
                  },
                  (data) => {
                    const updatedCart = data.getCartCar.filter(
                      (cartItem) => cartItem.id !== item.id
                    );

                    return {
                      getCartCar: updatedCart,
                    };
                  }
                );
              }}
            />
          )
        )}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-header">Summery</div>

        <div className="cart-summary-subtotal-wrapper">
          <div className="cart-summary-subtotal">
            <div>Subtotal</div>
            <div>
              ${" "}
              {loading
                ? "00"
                : !data.getCartCar.length
                ? "00"
                : data.getCartCar.reduce((acc, item) => acc + item.price, 0)}
              .00
            </div>
          </div>

          <div className="cart-summary-delivery">
            <div>Delivery Charge</div>
            <div>$ 10.00</div>
          </div>
        </div>

        <div className="cart-summary-total">
          <div>Total</div>
          <div>
            ${" "}
            {loading
              ? "00"
              : !data.getCartCar.length
              ? "00"
              : data.getCartCar.reduce((acc, item) => acc + item.price, 0) - 10}
            .00
          </div>
        </div>

        <button className="cart-summary-checkout-btn">Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
