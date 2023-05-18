import "./AddToy.css";
const AddToy = () => {
  return (
    <div className="center-container">
      <div className="add-toy-container ">
        <form>
          <div className="row">
            <div className="control">
              <label htmlFor="name">Toy Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Toy Name"
                required
              />
            </div>
            <div className="control">
              <label htmlFor="url">Photo URL: </label>
              <input
                type="text"
                name="url"
                id="url"
                placeholder="Photo URL"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="control">
              <label htmlFor="sellerName">Seller Name: </label>
              <input
                type="text"
                name="sellerName"
                id="sellerName"
                placeholder="Seller Name"
                required
              />
            </div>
            <div className="control">
              <label htmlFor="email">Seller Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seller Email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="control">
              <label htmlFor="category">Sub Category: </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Sub Category"
                required
              />
            </div>
            <div className="control">
              <label htmlFor="price">Price: </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="control">
              <label htmlFor="rating">Rating: </label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Rating(out of 5)"
                min={0}
                max={5}
                required
              />
            </div>
            <div className="control">
              <label htmlFor="price">Available Quantity: </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="control">
              <label htmlFor="description">
                {" "}
                Description:
                <textarea
                  name="description"
                  id="description"
                  rows="10"
                  placeholder="Description about the toy..."
                ></textarea>
              </label>
            </div>
          </div>
          <button className="btn-primary" type="submit">Add The Toy</button>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
