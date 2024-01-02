import "./AllToys.css";
import { useRef, useState } from "react";
import { useTitlePerPage } from "../../hooks/useTitlePerPage";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import Search from "../../components/ui/Search/Search";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "../../lib/graphql/queryDefs";
import Skeleton from "react-loading-skeleton";

// Filter and sort options
const filterValues = ["All", "Ferrari", "Bus", "Truck"];
const sortValues = [
  ["Default", "default"],
  ["Price: Low To High", "ascending"],
  ["Price: High To Low", "descending"],
];

const AllToys = () => {
  // Custom hook to set the page title
  useTitlePerPage("All Toys");

  // Refs for filter and sort options
  const toysFilterOptionsRef = useRef();
  const toysSortOptionsRef = useRef();
  const toysSortUpperChevronRef = useRef();
  const toysSortLowerChevronRef = useRef();

  // State for search and sort terms
  const [searchTerm, setSearhTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");

  const handleSearch = async (searchValue) => {
    setSearhTerm(searchValue);
  };

  // GraphQL query to get all toys
  let { data, loading, error } = useQuery(GET_CARS);

  // Handling GraphQL query error
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

  // Sorting and filtering the toys
  let sortedToys;
  if (!loading) {
    const allToys = data.getCars;

    // Filtering based on search term
    const filteredToys = searchTerm
      ? allToys.filter((toy) =>
          toy.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
      : allToys;

    // Sorting based on sort term
    sortedToys = sortTerm
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
  }

  return (
    <section className="toys-container">
      {/* Top header with search, filter, and sort options */}
      <div className="toys-top-header">
        <div className="toys-total-count">
          Toys <span>({loading ? "0" : sortedToys?.length})</span>
        </div>

        {/* Search component */}
        <Search
          onHandleSearch={handleSearch}
          placeholder="Search Your Favorite Toys... eg. bus, ferrari, truck"
        />

        {/* Filter and sort options */}
        <div className="toys-filter-sortby-wrapper">
          <div className="toys-filter-wrapper">
            <button
              data-testid="all-toys-filter-btn"
              onClick={() => {
                toysFilterOptionsRef.current.classList.toggle(
                  "open-toys-filter-options"
                );
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
            <div
              data-testid="all-toys-filter-options"
              ref={toysFilterOptionsRef}
              className="toys-filter-options"
            >
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
              data-testid="all-toys-sortby-btn"
              onClick={() => {
                if (
                  toysSortOptionsRef.current.classList.contains(
                    "open-toys-sortby-options"
                  )
                ) {
                  toysSortOptionsRef.current.classList.remove(
                    "open-toys-sortby-options"
                  );
                  toysSortUpperChevronRef.current.style.display = "none";
                  toysSortLowerChevronRef.current.style.display =
                    "inline-block";
                } else {
                  toysSortOptionsRef.current.classList.add(
                    "open-toys-sortby-options"
                  );

                  toysSortUpperChevronRef.current.style.display =
                    "inline-block";
                  toysSortLowerChevronRef.current.style.display = "none";
                }
              }}
            >
              <span>Sort By</span>

              <span>
                <svg
                  ref={toysSortLowerChevronRef}
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

                <svg
                  ref={toysSortUpperChevronRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="toys-sort-upper-chevron"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              data-testid="all-toys-sortby-options"
              ref={toysSortOptionsRef}
              className="toys-sortby-options"
            >
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
        {loading ? (
          <>
            <div
              style={{
                display: "none",
              }}
            >
              {loading && "all-toys-loading"}
            </div>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton
                key={index}
                style={{
                  height: "400px",
                  borderRadius: "15px",
                }}
                data-foo={`all-toys-skeleton ${index}`}
              />
            ))}
          </>
        ) : sortedToys.length ? (
          sortedToys.map((toy) => <ProductCard key={toy.id} data={toy} />)
        ) : (
          <div className="toys-not-found-title">No toys found!</div>
        )}
      </div>
    </section>
  );
};

export default AllToys;
