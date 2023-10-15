import { useQuery } from "@apollo/client";
import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Favorites.css";
import { GET_CART_CAR } from "../../lib/graphql/queryDefs";
import useContextProvider from "../../contexts/useContextProvider";
import deleteFromLocalStorage from "../../utils/deleteFromLocalStorage";
import { cache } from "../../lib/graphql";
import Swal from "sweetalert2";

const Favorites = () => {
  const { favIds } = useContextProvider();
  const { data, loading } = useQuery(GET_CART_CAR, {
    variables: { cartIds: favIds },
  });

  const deleteFavItem = (id) => {
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
        deleteFromLocalStorage("fav", id);
        cache.updateQuery(
          {
            query: GET_CART_CAR,
            variables: { cartIds: favIds },
          },
          (data) => {
            const updatedFav = data.getCartCar.filter(
              (cartItem) => cartItem.id !== id
            );

            return {
              getCartCar: updatedFav,
            };
          }
        );
      }
    });
  };

  return (
    <section className="favorites-container">
      <p
        className="favorites-count"
        style={{
          marginBlockEnd: `${
            loading || data?.getCartCar?.length ? "10px" : "400px"
          }`,
        }}
      >
        {loading ? "0" : data?.getCartCar?.length} favorites
      </p>
      {(loading ? Array.from({ length: 1 }) : data.getCartCar).map(
        (item, index) => (
          <FavoriteCard
            key={loading ? index : item.id}
            {...item}
            deleteItem={() => deleteFavItem(item.id)}
          />
        )
      )}
    </section>
  );
};

export default Favorites;
