import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./MyToys.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { useAuthContext } from "../../contexts/useAuthContext";
const MyToys = () => {
  useTitlePerPage("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("default");
  const { currentUser } = useAuthContext();

  const allToys = useLoaderData();
  console.log(allToys);

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
        fetch(`https://fun-car-factory-server.vercel.app/my-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const filteredToys = myToys.filter((toy) => toy._id !== id);
            setMyToys(filteredToys);

            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);

            // *show toast
            toast.error(error.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
          });
      }
    });
  };

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const fetchData = () => {
  //     setIsLoading(true);
  //     fetch(
  //       `https://fun-car-factory-server.vercel.app/my-toys?email=${currentUser?.email}&sort=${sort}`,
  //       {
  //         signal: abortController.signal,
  //       }
  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setMyToys(data);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setIsLoading(false);
  //       });
  //   };
  //   fetchData();

  //   return () => {
  //     abortController.abort();
  //   };
  // }, [currentUser, sort]);

  // if (isLoading) {
  //   return <div className="loader"></div>;
  // }

  if (!allToys.length) {
    return <p className="no-data">You have not added any toys!</p>;
  }

  return (
    <div className="my-toys-container">
      <div className="sort-container">
        <p>Sort:</p>
        <select
          defaultValue={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sort"
        >
          <option value="default"> Default </option>
          <option value="highest"> Highest Price </option>
          <option value="lowest"> Lowest Price </option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Seller Name</th>
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
          {allToys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.sellerName}</td>
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
                  onClick={() => handleDelete(toy._id)}
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
  );
};

export default MyToys;
