/** @format */

//import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { store } from "./helpers";
import ReactRouter from "./router/ReactRouter";
import "./assets/styles/_style.scss";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";
// let environment = process.env.NODE_ENV || 'development';
// console.log('TEST :', environment)

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, store);

const store1 = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
// rootElement variable
const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);
const persistor = persistStore(store1);
root.render(
  <Provider store={store1}>
    <PersistGate loading={null} persistor={persistor}>
      <ReactRouter />
    </PersistGate>
  </Provider>
);
