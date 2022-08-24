import { combineReducers } from "@reduxjs/toolkit";
import customers from "../features/customers/reducers";
import regions from "../features/regions/reducers";

const rootReducer = combineReducers({
    customers,
    regions,
});

export default rootReducer;