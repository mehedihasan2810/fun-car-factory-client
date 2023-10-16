import { useQuery } from "@apollo/client";
import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Favorites.css";
import { GET_CART_CAR, GET_FAV_CAR } from "../../lib/graphql/queryDefs";
import useContextProvider from "../../contexts/useContextProvider";
import { cache } from "../../lib/graphql";
import Swal from "sweetalert2";
import deleteFromLocalStorage from "../../utils/deleteFromLocalStorage";

const Favorites = () => {
  const { favIds, cartIds, addToLocalStorage, checkTotalCartToys } =
    useContextProvider();
  const { data, loading } = useQuery(GET_FAV_CAR, {
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
        checkTotalCartToys();
        cache.updateQuery(
          {
            query: GET_FAV_CAR,
            variables: { cartIds: favIds },
          },
          (data) => {
            const updatedFav = data.getFavCar.filter(
              (cartItem) => cartItem.id !== id
            );

            return {
              getFavCar: updatedFav,
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
            loading || data?.getFavCar?.length ? "10px" : "400px"
          }`,
        }}
      >
        {loading ? "0" : data?.getFavCar?.length} favorites
      </p>
      {(loading ? Array.from({ length: 2 }) : data.getFavCar).map(
        (item, index) => (
          <FavoriteCard
            key={loading ? index : item.id}
            {...item}
            deleteItem={() => deleteFavItem(item.id)}
            addToStorage={() => {
              addToLocalStorage("cart", item.id);

              cache.updateQuery(
                {
                  query: GET_CART_CAR,
                  variables: { cartIds },
                },
                (data) => {
                  if (data) {
                    const isExist = data?.getCartCar.find(
                      (cartItem) => cartItem.id === item.id
                    );

                    return {
                      getCartCar: isExist
                        ? data?.getCartCar
                        : [...data.getCartCar, item],
                    };
                  }
                }
              );
            }}
            type="fav"
          />
        )
      )}
    </section>
  );
};

export default Favorites;
