
import "./Gallery.css";



const Gallery = () => {
  return (
    <section className="gallery-container">
      <h2>Gallery</h2>

      <div className="gallery">
        <img
          src="https://images.pexels.com/photos/1522184/pexels-photo-1522184.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/5257291/pexels-photo-5257291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/10226186/pexels-photo-10226186.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/675266/pexels-photo-675266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/5472259/pexels-photo-5472259.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
      </div>
    </section>
  );
};

export default Gallery;
