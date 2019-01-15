import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from "../reducers";


const middlewares = applyMiddleware(thunk, logger);
const store = createStore(
  createRootReducer(),
  composeWithDevTools(middlewares)
);

export default store;
