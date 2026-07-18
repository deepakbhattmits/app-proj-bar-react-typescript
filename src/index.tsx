/** @format */

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./helpers";
import ReactRouter from "./router/ReactRouter";
import "./assets/styles/style.css";

const store1 = configureStore({
  reducer: store,
});

const persistor = persistStore(store1);

const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <Provider store={store1}>
    <PersistGate loading={null} persistor={persistor}>
      <ReactRouter />
    </PersistGate>
  </Provider>
);
