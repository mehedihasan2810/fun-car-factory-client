import { Link, useLoaderData } from "react-router-dom";
import "./AllToys.css";
import { useState } from "react";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthProvider";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
const AllToys = () => {
  const { currentUser } = useAuthContext();
  useTitlePerPage("All Toys");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const allToys = useLoaderData();

  const handleSearch = () => {
    fetch(`https://fun-car-factory-server.vercel.app/search?term=${searchTerm}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error performing search:", error);
      });
  };

  return (
    <div className="toys-container">
      <div className="toys-top-header">
        <div className="toys-total-count">
          Toys <span>({allToys.length})</span>
        </div>
        <div className="toys-filter-sortby-wrapper">
          <div className="toys-filter-wrapper">
            <button>
              <span>Filter</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
            </button>
            <div className="toys-filter-options">
              <button>Bus</button>
              <button>truck</button>
              <button>ferrari</button>
              {/* <div>Bus</div> */}
            </div>
          </div>
          <div className="toys-sortby-wrapper">
            <button>
              <span>Sort By</span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg> */}
              </span>
            </button>
            <div className="toys-sortby-options">
              <button>Price: High To Low</button>
              <button>Price: Low To High</button>
            </div>
          </div>
        </div>
      </div>
      <div className="toys-grid">
        {allToys.map((toy) => (
          <ProductCard key={toy._id} data={toy} />
        ))}
        {/* <div className="all-toys-container">
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
                      <button
                        onClick={() => {
                          if (currentUser) return;
                          toast.warn(
                            "You have to log in first to view details!",
                            {
                              position: toast.POSITION.TOP_CENTER,
                              autoClose: 2000,
                            }
                          );
                        }}
                        className="btn-primary"
                      >
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div> */}
      </div>
    </div>
  );
};

export default AllToys;
