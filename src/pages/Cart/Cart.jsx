import { useQuery } from "@apollo/client";
import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Cart.css";
import { GET_CART_CAR, GET_FAV_CAR } from "../../lib/graphql/queryDefs";
import useContextProvider from "../../contexts/useContextProvider";
import { cache } from "../../lib/graphql";
import Swal from "sweetalert2";
import deleteFromLocalStorage from "../../utils/deleteFromLocalStorage";

const Cart = () => {
  const { cartIds, favIds, addToLocalStorage, checkTotalCartToys } =
    useContextProvider();
  const { data, loading } = useQuery(GET_CART_CAR, {
    variables: { cartIds },
  });

  const deleteCartItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFromLocalStorage("cart", id);
        checkTotalCartToys();
        cache.updateQuery(
          {
            query: GET_CART_CAR,
            variables: { cartIds },
          },
          (data) => {
            const updatedCart = data.getCartCar.filter(
              (cartItem) => cartItem.id !== id
            );

            return {
              getCartCar: updatedCart,
            };
          }
        );
      }
    });
  };

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
        {(loading ? Array.from({ length: 2 }) : data.getCartCar).map(
          (item, index) => (
            <FavoriteCard
              key={loading ? index : item.id}
              {...item}
              deleteItem={() => deleteCartItem(item.id)}
              addToStorage={() => {
                addToLocalStorage("fav", item.id);

                cache.updateQuery(
                  {
                    query: GET_FAV_CAR,
                    variables: { cartIds: favIds },
                  },
                  (data) => {
                    if (data) {
                      const isExist = data.getFavCar.find(
                        (cartItem) => cartItem.id === item.id
                      );

                      return {
                        getFavCar: isExist
                          ? data.getFavCar
                          : [...data.getFavCar, item],
                      };
                    }
                  }
                );
              }}
              type="cart"
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
