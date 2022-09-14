import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducers/index";

const Store = configureStore(reducers)

export default Store;

