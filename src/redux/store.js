import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counters from "./reducer";

const store = createStore(
    counters,
    composeWithDevTools(
        applyMiddleware()
    )
);

export default store;