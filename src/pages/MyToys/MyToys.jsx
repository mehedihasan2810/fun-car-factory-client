import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./MyToys.css";
const MyToys = () => {
  return (
    <div className="center-container">
      <div className="my-toys-container">
        <table>
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
          <tr>
            <td>Jill</td>
            <td>Tesla Super Truck</td>
            <td>truck</td>
            <td>20$</td>
            <td>5</td>
            <td>
              <button className="btn-primary">View Details</button>
            </td>
            <td className="edit-btn">
              <Link to="/update-toys">
                <FaEdit />
              </Link>
            </td>
            <td>
              <button className="delete-btn">
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Tesla Super Truck</td>
            <td>truck</td>
            <td>20$</td>
            <td>5</td>
            <td>
              <button className="btn-primary">View Details</button>
            </td>
            <td className="edit-btn">
              <Link to="/update-toys">
                <FaEdit />
              </Link>
            </td>
            <td>
              <button className="delete-btn">
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Tesla Super Truck</td>
            <td>truck</td>
            <td>20$</td>
            <td>5</td>
            <td>
              <button className="btn-primary">View Details</button>
            </td>
            <td className="edit-btn">
              <Link to="/update-toys">
                <FaEdit />
              </Link>
            </td>
            <td>
              <button className="delete-btn">
                <FaTrash />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
