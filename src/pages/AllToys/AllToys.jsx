import { useLoaderData } from "react-router-dom";
import "./AllToys.css";
import { useRef, useState } from "react";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
// import { toast } from "react-toastify";
// import { useAuthContext } from "../../contexts/AuthProvider";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import Search from "../../components/ui/Search/Search";

const filterValues = ["All", "Ferrari", "Bus", "Truck"];
const sortValues = [
  ["Default", "default"],
  ["Price: Low To High", "ascending"],
  ["Price: High To Low", "descending"],
];

const AllToys = () => {
  // const { currentUser } = useAuthContext();
  useTitlePerPage("All Toys");

  const toysFilterOptionsRef = useRef();
  const toysSortOptionsRef = useRef();

  const [searchTerm, setSearhTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  const allToys = useLoaderData();

  const handleSearch = async (searchValue) => {
    setSearhTerm(searchValue);
  };

  const filteredToys = searchTerm
    ? allToys.filter((toy) =>
        toy.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : allToys;

  const sortedToys = sortTerm
    ? filteredToys.slice().sort((toy1, toy2) => {
        const price1 = +toy1.price;
        const price2 = +toy2.price;

        if (sortTerm === "ascending") {
          return price1 > price2 ? 1 : price1 < price2 ? -1 : 0;
        }
        if (sortTerm === "descending") {
          return price1 < price2 ? 1 : price1 > price2 ? -1 : 0;
        }
      })
    : filteredToys;

  return (
    <div className="toys-container">
      <div className="toys-top-header">
        <div className="toys-total-count">
          Toys <span>({allToys.length})</span>
        </div>
        <Search onHandleSearch={handleSearch} />
        <div className="toys-filter-sortby-wrapper">
          <div className="toys-filter-wrapper">
            <button
              onClick={() => {
                if (toysFilterOptionsRef.current.style.cssText) {
                  toysFilterOptionsRef.current.style.cssText = "";
                } else {
                  toysFilterOptionsRef.current.style.cssText = `transform: translateY(0); opacity: 1;  visibility: visible;`;
                }
              }}
            >
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
            <div ref={toysFilterOptionsRef} className="toys-filter-options">
              {filterValues.map((value, index) => (
                <button
                  onClick={() =>
                    setSearhTerm(
                      value.toLocaleLowerCase() === "all" ? "" : value
                    )
                  }
                  key={index}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <div className="toys-sortby-wrapper">
            <button
              onClick={() => {
                if (toysSortOptionsRef.current.style.cssText) {
                  toysSortOptionsRef.current.style.cssText = "";
                } else {
                  toysSortOptionsRef.current.style.cssText = `transform: translateY(0); opacity: 1;  visibility: visible;`;
                }
              }}
            >
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
            <div ref={toysSortOptionsRef} className="toys-sortby-options">
              {sortValues.map((value, index) => (
                <button onClick={() => setSortTerm(value[1])} key={index}>
                  {value[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="toys-grid">
        {sortedToys.length ? (
          sortedToys.map((toy) => <ProductCard key={toy._id} data={toy} />)
        ) : (
          <div className="toys-not-found-title">No toys found!</div>
        )}
      </div>
    </div>
  );
};

export default AllToys;
