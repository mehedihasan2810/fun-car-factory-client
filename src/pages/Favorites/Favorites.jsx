import { useQuery } from "@apollo/client";
import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Favorites.css";
import { GET_CART_CAR } from "../../lib/graphql/queryDefs";
import useContextProvider from "../../contexts/useContextProvider";
import deleteFromLocalStorage from "../../utils/deleteFromLocalStorage";
import { cache } from "../../lib/graphql";

const Favorites = () => {
  const { favIds } = useContextProvider();
  const { data, loading } = useQuery(GET_CART_CAR, {
    variables: { cartIds: favIds },
  });

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
            deleteItem={() => {
              deleteFromLocalStorage("fav", item.id);
              cache.updateQuery(
                {
                  query: GET_CART_CAR,
                  variables: { cartIds: favIds },
                },
                (data) => {
                  const updatedFav = data.getCartCar.filter(
                    (cartItem) => cartItem.id !== item.id
                  );

                  return {
                    getCartCar: updatedFav,
                  };
                }
              );
            }}
          />
        )
      )}
    </section>
  );
};

export default Favorites;
