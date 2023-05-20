import { Link, useLoaderData } from "react-router-dom";
import "./AllToys.css";
import { useState } from "react";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
const AllToys = () => {
  useTitlePerPage('All Toys')
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const allToys = useLoaderData();
  console.log(allToys);

  const handleSearch = () => {
    fetch(`https://fun-car-factory-server.vercel.app/search?term=${searchTerm}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error performing search:", error);
      });
  };

  return (
    <div className="center-container">
      <div className="all-toys-container">
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
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
            </tr>
          </thead>
          <tbody>
            {(searchResults.length === 0 ? allToys : searchResults)?.map(
              (toy) => (
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
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
