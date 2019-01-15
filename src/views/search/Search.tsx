import * as React from "react";

import SearchView from "./SearchView";
import { searchService } from "src/service";
import { connect } from "react-redux";
import { IItemsProps, ISearchResponse } from "src/interface/search.interface";

interface ISearchProps {
  loadSearchResults: (searchQuery: string) => Promise<any>;
}

interface ISearchState {
  searchQuery: string;
  searchResults: Array<IItemsProps>;
}

class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: Readonly<ISearchProps>) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: []
    };
  }

  handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({
      searchQuery: value
    });
  };

  sendSearchRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    this.props
      .loadSearchResults(searchQuery)
      .then((response: ISearchResponse) => {
        this.setState({
          searchResults: response.items
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  render() {
    const { searchResults } = this.state;
    return (
      <SearchView
        searchResults={searchResults}
        handleSearchQueryChange={this.handleSearchQueryChange}
        sendSearchRequest={this.sendSearchRequest}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  loadSearchResults: (searchQuery: string) =>
    dispatch(searchService.sendSearchRequest(searchQuery))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
