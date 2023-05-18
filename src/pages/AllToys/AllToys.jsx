import "./AllToys.css";
const AllToys = () => {
  return (
    <div className="center-container">
      <div className="all-toys-container">
        <table>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>View Details</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Tesla Super Truck</td>
            <td>truck</td>
            <td>20$</td>
            <td>5</td>
            <td><button className="btn-primary">View Details</button></td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Tesla Super Truck</td>
            <td>truck</td>
            <td>20$</td>
            <td>5</td>
            <td><button className="btn-primary">View Details</button></td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Tesla Super Truck</td>
            <td>truck</td>
            <td>20$</td>
            <td>5</td>
            <td><button className="btn-primary">View Details</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
