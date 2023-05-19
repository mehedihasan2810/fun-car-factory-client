import { useLoaderData } from "react-router-dom";
import "./AllToys.css";
const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);

  return (
    <div className="center-container">
      <div className="all-toys-container">
        <table>
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
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
                  <button className="btn-primary">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
