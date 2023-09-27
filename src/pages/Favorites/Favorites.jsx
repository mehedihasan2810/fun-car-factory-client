import FavoriteCard from "../../components/ui/FavoriteCard/FavoriteCard";
import "./Favorites.css";

const Favorites = () => {
  return (
    <section className="favorites-container">
      <p
        className="favorites-count"
        style={{
          marginBlockEnd: `${0 ? "400px" : "10px"}`,
        }}
      >
        10 favorites
      </p>
      {Array.from({ length: 10 }).map((_, index) => (
        <FavoriteCard key={index} />
      ))}
    </section>
  );
};

export default Favorites;
