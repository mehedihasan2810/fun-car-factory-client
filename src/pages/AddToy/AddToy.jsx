import { toast } from "react-toastify";
import "./AddToy.css";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useAuthContext } from "../../contexts/useAuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_CAR } from "../../lib/graphql/queryDefs";
const AddToy = () => {
  useTitlePerPage("Add Toy");
  const { currentUser } = useAuthContext();

  const [addCar, { data, loading, error }] = useMutation(CREATE_CAR);

  // console.log("data", data);
  // console.log("loading", loading);
  // console.log("error", error);

  const handleAddToy = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const toyInfo = Object.fromEntries(formData);

    addCar({
      variables: {
        carInput: {
          ...toyInfo,
          price: +toyInfo.price,
          quantity: +toyInfo.quantity,
          rating: +toyInfo.rating,
        },
      },
    });

    // fetch("https://fun-car-factory-server.vercel.app/add-toy", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(toyInfo),
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     // *show toast
    //     toast.success("Succesfully Added", {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 2000,
    //     });

    //     // e.target.reset();
    //   })
    //   .catch((error) => {
    //     console.log(error);

    //     // *show toast
    //     toast.error(error.message, {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 2000,
    //     });
    //   });
  };

  return (
    <div className="center-container">
      <div className="add-toy-container ">
        <h2 className="add-title">Add Toy</h2>
        <form onSubmit={handleAddToy}>
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
                defaultValue={currentUser.email}
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
          <button type="submit">Add The Toy</button>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
