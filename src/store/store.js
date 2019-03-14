import { createStore, applyMiddleware } from "redux";
import sectionReducer from "../reducers/index";
import thunk from "redux-thunk"

const store = createStore(sectionReducer, applyMiddleware(thunk));

export default store;