import { useState } from "react";
import "./Search.css";

const Search = ({ onHandleSearch, placeholder }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-form-control">
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onHandleSearch(search);
          }
        }}
        type="text"
        id="search"
        name="search"
        placeholder={placeholder}
      />
      <button onClick={() => onHandleSearch(search)} type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
