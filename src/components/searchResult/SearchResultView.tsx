import * as React from "react";
import { Row, Col } from "reactstrap";
import { IItemsProps } from "src/interface/search.interface";

export interface ISearchResultViewProps {
  searchResults: Array<IItemsProps>;
}

const SearchResultView: React.SFC<ISearchResultViewProps> = props => {
  return (
    <div>
      {props.searchResults.map((result: IItemsProps, index: number) => {
        return (
          <Row key={index}>
            <Col>
              <div>
                <img src={result.snippet.thumbnails.default.url} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <div>{result.snippet.title}</div>
                <div>{result.channelTitle}</div>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default SearchResultView;
