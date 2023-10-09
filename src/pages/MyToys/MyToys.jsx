import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "./MyToys.css";

import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import Search from "../../components/ui/Search/Search";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "../../lib/graphql/queryDefs";
const MyToys = () => {
  useTitlePerPage("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [searchTerm, setSearhTerm] = useState("");

  const { data, loading, error } = useQuery(GET_CARS);

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

  // const allToys = useLoaderData();

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://fun-car-factory-server.vercel.app/my-toys/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then(() => {
  //           const filteredToys = myToys.filter((toy) => toy._id !== id);
  //           setMyToys(filteredToys);

  //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //         })
  //         .catch((error) => {
  //           console.log(error);

  //           // *show toast
  //           toast.error(error.message, {
  //             position: toast.POSITION.TOP_CENTER,
  //             autoClose: 2000,
  //           });
  //         });
  //     }
  //   });
  // };

  const handleSearch = async (searchValue) => {
    setSearhTerm(searchValue);
  };

  let filteredToys;

  if (!loading) {
    filteredToys = searchTerm
      ? data.getCars.filter((toy) =>
          toy.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
      : data.getCars;
  }

  // if (!allToys.length) {
  //   return <p className="no-data">You have not added any toys!</p>;
  // }

  return (
    <div className="my-toys-container">
      <div className="my-toys-top-header">
        <div>
          Total <span>({filteredToys?.length})</span>
        </div>

        <Search
          onHandleSearch={handleSearch}
          placeholder="Search Toys... eg. bus, ferrari, truck"
        />
      </div>
      <div className="table-scroller">
        <table>
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys?.map((toy) => (
              <tr key={toy.id}>
                <td className="name-td">
                  <img src={toy.url} alt="" />
                  {toy.name}
                </td>
                <td>{toy.category}</td>
                <td>{toy.price}$</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/toy-details/${toy._id}`}>
                    <button className="toy-details-btn">View Details</button>
                  </Link>
                </td>
                <td title="Update" className="edit-btn">
                  <Link to={`/my-toys/${toy._id}`}>
                    <FaEdit />
                  </Link>
                </td>
                <td>
                  <button
                    title="Delete"
                    // onClick={() => handleDelete(toy._id)}
                    className="delete-btn"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
