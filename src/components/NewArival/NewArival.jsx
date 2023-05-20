import "./NewArival.css";
const NewArival = () => {
  return (
    <div data-aos="fade-up" className="arival-container">
      <h2 className="arival-title">New Arrival</h2>
      <div className="arival">
        <div className="small-container">
          <img
            className="img-small"
            src="https://images.pexels.com/photos/4488198/pexels-photo-4488198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="big-container">
          <img
            className="img-big"
            src="https://images.pexels.com/photos/4491687/pexels-photo-4491687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewArival;
