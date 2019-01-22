import * as React from "react";
import { Row, Col } from "reactstrap";
import { IItemsProps } from "src/interface/search.interface";

export interface ISearchResultViewProps {
  searchResults: Array<IItemsProps>;
}

const SearchResultView: React.SFC<ISearchResultViewProps> = props => {
  return (
    <div className={"search-result"}>
      {props.searchResults.map((result: IItemsProps, index: number) => {
        if (result.id.videoId) {
          return (
            <Row key={index}>
              <Col md={2} lg={2} sm={2}>
                <img
                  className={"video-thumbnail"}
                  src={result.snippet.thumbnails.default.url}
                  alt=""
                />
                {console.log(result.id.videoId)}
                <a
                  href={`https://www.youtube.com/embed/${
                    result.id.videoId
                  }?rel=0&autoplay=1`}
                  target="soundtrack"
                >
                  Play
                </a>
                <a href="nothing.html" target="soundtrack">
                  {" "}
                  Pause
                </a>
                <iframe
                  name="soundtrack"
                  height={0}
                  width={0}
                  allow="autoplay"
                  src={`https://www.youtube.com/embed/${result.id.videoId}`}
                >
                  audio not available
                </iframe>
              </Col>

              <Col md={10} lg={10} sm={10}>
                <div className={"video-title"} title={result.snippet.title}>
                  {result.snippet.title}
                </div>
                <div className={"video-description"}>
                  {result.snippet.channelTitle}
                </div>
              </Col>
            </Row>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SearchResultView;
