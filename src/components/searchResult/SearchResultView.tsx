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
            <Col md={2}>
              <div className={"video-image"}>
                <img src={result.snippet.thumbnails.default.url} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className={"video-title"} title={result.snippet.title}>
                {result.snippet.title}
              </div>
              <div className={"video-description"}>
                {result.snippet.channelTitle}
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default SearchResultView;
