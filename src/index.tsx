/** @format */

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { store } from "./helpers";
import ReactRouter from "./router/ReactRouter";
import "./assets/styles/_style.scss";

const store1 = configureStore({
  reducer: store,
});

const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <Provider store={store1}>
    <ReactRouter />
  </Provider>
);
