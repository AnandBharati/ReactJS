import { combineReducers } from "@reduxjs/toolkit";
import { CounterReducerInc, CounterReducerDecr, CounterReducerReset } from "./Reducers";

const reducers = combineReducers({
    CounterReducerInc,
    CounterReducerDecr,
    CounterReducerReset
})

export default reducers;