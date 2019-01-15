export interface ISearchResponse {
  items: Array<IItemsProps>;
}

export interface IItemsProps {
  snippet: ISnippet;
  channelTitle: string
}

interface ISnippet {
  title: string;
  thumbnails: IThumbnailProps;
}

interface IThumbnailProps {
  default: {
    url: string;
    width: number;
    height: number;
  };
}
