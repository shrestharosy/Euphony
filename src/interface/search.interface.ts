export interface ISearchResponse {
  items: Array<IItemsProps>;
}

export interface IItemsProps {
  snippet: ISnippet;
}

interface ISnippet {
  title: string;
  channelTitle: string
  thumbnails: IThumbnailProps;
}

interface IThumbnailProps {
  default: {
    url: string;
    width: number;
    height: number;
  };
}
