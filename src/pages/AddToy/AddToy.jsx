import { toast } from "react-toastify";
import "./AddToy.css";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useAuthContext } from "../../contexts/useAuthContext";
import { gql, useMutation } from "@apollo/client";
import { CREATE_CAR } from "../../lib/graphql/queryDefs";
const AddToy = () => {
  // Custom hook to set the page title
  useTitlePerPage("Add Toy");

  // Authentication context to get the current user
  const { currentUser } = useAuthContext();

  // Mutation hook to add a new car
  let [addCar, { loading, error }] = useMutation(CREATE_CAR, {
    // Update the cache to display the new car without fetching again
    update(cache, { data: { createCar } }) {
      cache.modify({
        fields: {
          getCars(existingCars = []) {
            console.log(existingCars);

            const newCarRef = cache.writeFragment({
              data: createCar.car,
              fragment: gql`
                fragment NewCar on Car {
                  id
                  name
                  price
                  url
                  rating
                  category
                  quantity
                }
              `,
            });

            return [...existingCars, newCarRef];
          },
        },
      });
    },
  });

  // Handle the form submission to add a new toy
  const handleAddToy = (e) => {
    e.preventDefault();

    // Extract form data
    const formData = new FormData(e.target);
    const toyInfo = Object.fromEntries(formData);

    // Invoke the addCar mutation
    addCar({
      variables: {
        carInput: {
          ...toyInfo,
          price: +toyInfo.price,
          quantity: +toyInfo.quantity,
          rating: +toyInfo.rating,
        },
      },
      onCompleted: () => {
        // Display success toast upon successful addition
        toast.success("Succesfully Added", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      },
      onError: () => {
        // Display error toast upon failure
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      },
    });
  };

  return (
    <section className="center-container">
      <div className="add-toy-container ">
        <h2 className="add-title">Add Toy</h2>
        <form onSubmit={handleAddToy}>
          {/* Form fields for toy information */}
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
                defaultValue={currentUser?.email}
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

          {/* Submit button with loading state */}
          <button
            style={{
              opacity: `${loading ? "0.5" : "1"}`,
            }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Adding..." : "Add The Toy"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddToy;
