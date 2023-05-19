import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./MyToys.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { currentUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/myToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // *show toast
        toast.success("Succesfully Deleted!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.log(error);

        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = () => {
      setIsLoading(true);
      fetch(`http://localhost:4000/myToys?email=${currentUser?.email}`, {
        signal: abortController.signal,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMyToys(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [currentUser]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (myToys.length === 0) {
    return <p className="no-data">You have not added any toys!</p>;
  }

  return (
    <div className="center-container">
      <div className="my-toys-container">
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
            {myToys.length !== 0 &&
              myToys?.map((toy) => (
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
                      <button className="btn-primary">View Details</button>
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
    </div>
  );
};

export default MyToys;
