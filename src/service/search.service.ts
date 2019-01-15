import { Dispatch } from "redux";
import { AxiosResponse } from "axios";

import axios from "../utils/axios.utils";
import { CONFIG } from "src/config";

const API_KEY = CONFIG.YOUTUBE_API_KEY;

function sendSearchRequest(searchQuery: string) {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      const maxResults = 10;
      const URL = `/search/?part=snippet&q=${searchQuery}&maxResults=${maxResults}&key=${API_KEY}`;
      const response: AxiosResponse = await axios(URL);
      return response.data;
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.log(e);
      throw e;
    }
  };
}

export const searchService = {
  sendSearchRequest
};
