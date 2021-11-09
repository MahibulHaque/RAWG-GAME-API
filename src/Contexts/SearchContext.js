import { useState, createContext, useContext } from "react";

const SearchContext = createContext();
export const useSearch = ()=> useContext(SearchContext);

function SearchContextProvider(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const value = { searchQuery, setSearchQuery };
  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
}
export default SearchContextProvider;
