import * as React from "react";

import SearchResult from "src/components/searchResult";
import { IItemsProps } from "src/interface/search.interface";

interface ISearchProps {
  searchResults: Array<IItemsProps>;
  handleSearchQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendSearchRequest: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const SearchView: React.SFC<ISearchProps> = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name={"searchQuery"}
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.handleSearchQueryChange(e)
          }
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            props.sendSearchRequest(e)
          }
        >
          Search
        </button>
      </form>
      {props.searchResults.length === 0 ? (
        ""
      ) : (
        <SearchResult searchResults={props.searchResults} />
      )}
    </div>
  );
};

export default SearchView;
