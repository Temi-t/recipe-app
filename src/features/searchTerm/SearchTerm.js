import React from "react";
import { FcSearch } from "react-icons/fc";
import { MdClear } from "react-icons/md";
import { setSearchTerm, clearSearchTerm } from "./searchTermSlice";

export default function SearchTerm({ searchTerm, dispatch }) {
  const handleSearchTerm = (e) => {
    const searchInput = e.target.value;
    dispatch(setSearchTerm(searchInput));
  };
  const handleClearTerm = () => {
    dispatch(clearSearchTerm());
  };
  return (
    <div>
      <FcSearch />
      <input
        className="search"
        type="text"
        placeholder="search recipe"
        onChange={handleSearchTerm}
        value={searchTerm}
      />
      {searchTerm.length > 0 && (
        <button className="clear-btn" type="button" onClick={handleClearTerm}>
          <MdClear />
        </button>
      )}
    </div>
  );
}
