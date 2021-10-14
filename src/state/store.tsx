import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const devTools = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default createStore(rootReducer, devTools);
