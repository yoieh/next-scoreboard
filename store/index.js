import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistCombineReducers } from "redux-persist";
// import localforage from "localforage";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { LocalizeProvider, localizeReducer } from "react-localize-redux";

// import rootReducer, { exampleInitialState } from "./reducer";
import rootSaga from "./saga";

import { menuReducer } from "./menuReducer";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}, { isServer, req, debug, storeKey }) {
  let rootReducer;

  if (isServer) {
    rootReducer = combineReducers({
      // app: appReducer,
      menu: menuReducer,
      localize: localizeReducer
      // routing: routerReducer
    });
  } else {
    const persistConfig = {
      key: "root",
      version: 1,
      storage: storage
      // migrate: state => {
      //   return Promise.resolve(state);
      // }
    };

    rootReducer = persistCombineReducers(persistConfig, {
      menu: menuReducer,
      localize: localizeReducer
      // routing: routerReducer
    });
  }

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  if (!isServer) {
    store.__persistor = persistStore(store); // Nasty hack
  }

  return store;
}

export default configureStore;
