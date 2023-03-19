import { useState } from "react";
import FilteringName from "./FilteringName";

const Search = () => {
  const [search, setSearch] = useState("");
  const textSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a name..."
        onKeyUp={textSearch}
      />
      <FilteringName search={search} />
    </>
  );
};
export default Search;
