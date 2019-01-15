import * as React from "react";

import SearchResultView from "./SearchResultView";
import { IItemsProps } from "src/interface/search.interface";

export interface ISearchResultProps {
  searchResults: Array<IItemsProps>;
}

class SearchResult extends React.Component<ISearchResultProps> {
  render() {
    const { searchResults } = this.props;

    return <SearchResultView searchResults={searchResults} />;
  }
}

export default SearchResult;
