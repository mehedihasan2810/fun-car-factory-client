import { toast } from "react-toastify";
import "./UpdateToy.css";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useQuery } from "@apollo/client";
import { GET_CAR } from "../../lib/graphql/queryDefs";
const UpdateToy = () => {
  useTitlePerPage("Update Toy");
  const navigate = useNavigate();

  const params = useParams();

  const {
    data: toy,
    loading,
    error,
  } = useQuery(GET_CAR, {
    variables: { id: params.id },
  });

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const toyInfo = Object.fromEntries(formData);

  //   fetch(`https://fun-car-factory-server.vercel.app/update/${params.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(toyInfo),
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       // *show toast
  //       toast.success("Succesfully Updated!", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 2000,
  //       });

  //       navigate("/my-toys");

  //       // e.target.reset();
  //     })
  //     .catch((error) => {
  //       console.log(error);

  //       // *show toast
  //       toast.error(error.message, {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 2000,
  //       });
  //     });
  // };

  // if (loading) {
  //   return <div>loading.....</div>;
  // }

  if (error) {
    return (
      <div
        style={{
          marginBlock: "300px",
          textAlign: "center",
          color: "pink",
        }}
      >
        Something went wrong! try again by reloading the page
      </div>
    );
  }

  return (
    <div className="center-container">
      <div className="update-toy-container ">
        <h2 className="update-title">Update Toy</h2>
        <form
        // onSubmit={handleUpdate}
        >
          <div className="row">
            <div className="control">
              <label htmlFor="name">Toy Name: </label>
              <input
                defaultValue={loading ? "" : toy.getCar.name}
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
                defaultValue={loading ? "" : toy.getCar.url}
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
                defaultValue={loading ? "" : toy.getCar.sellerName}
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
                defaultValue={loading ? "" : toy.getCar.email}
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
                defaultValue={loading ? "" : toy.getCar.category}
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
                defaultValue={loading ? "" : toy.getCar.price}
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
                defaultValue={loading ? "" : toy.getCar.rating}
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
                defaultValue={loading ? "" : toy.getCar.quantity}
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
                  defaultValue={loading ? "" : toy.getCar.description}
                  name="description"
                  id="description"
                  rows="10"
                  placeholder="Description about the toy..."
                ></textarea>
              </label>
            </div>
          </div>
          <button disabled={loading} type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
