import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialstate = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialstate,
  compose(
    applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
