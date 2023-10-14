import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "./MyToys.css";

import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import Search from "../../components/ui/Search/Search";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CAR, GET_CARS } from "../../lib/graphql/queryDefs";
import Skeleton from "react-loading-skeleton";
const MyToys = () => {
  useTitlePerPage("My Toys");
  const [searchTerm, setSearhTerm] = useState("");

  const { data, loading, error } = useQuery(GET_CARS);
  const [deleteToy] = useMutation(DELETE_CAR, {
    update(cache, { data: { deleteCar } }) {
      cache.modify({
        // id: cache.identify(deleteCar),
        fields: {
          getCars(existingCars = [], { readField }) {
            return existingCars.filter(
              (car) => deleteCar.id !== readField("id", car)
            );
          },
        },
      });
    },
  });

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

  const handleDelete = (id) => {
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
        deleteToy({
          variables: { deleteCarId: id },
          onCompleted: () => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          },
          onError: (error) => {
            toast.error(error.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
          },
        });
      }
    });
  };

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

  return (
    <div className="my-toys-container">
      <div
        data-testid="my-toys-loading-skeleton"
        style={{
          display: "none",
        }}
      >
        {loading && "my-toys-loading-skeleton"}
      </div>
      <div className="my-toys-top-header">
        <div>
          Total <span>({loading ? "0" : filteredToys.length})</span>
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
            {loading
              ? Array.from({ length: 15 }).map((_, index) => (
                  <tr
                    key={index}
                    style={{
                      height: "65px",
                    }}
                  >
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                    <td>
                      <Skeleton
                        style={{
                          height: "20px",
                        }}
                      />
                    </td>
                  </tr>
                ))
              : filteredToys.map((toy) => (
                  <tr key={toy.id}>
                    <td data-testid="my-toys-toy-name" className="name-td">
                      <img src={toy.url} alt={toy.name} />
                      {toy.name}
                    </td>
                    <td>{toy.category}</td>
                    <td data-testid="my-toys-price">${toy.price}</td>
                    <td>{toy.quantity}</td>
                    <td>
                      <Link to={`/toy-details/${toy.id}`}>
                        <button className="toy-details-btn">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td title="Update" className="edit-btn">
                      <Link to={`/my-toys/${toy.id}`}>
                        <FaEdit />
                      </Link>
                    </td>
                    <td>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(toy.id)}
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
