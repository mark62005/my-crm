import { combineReducers } from "@reduxjs/toolkit";
import customers from "../features/customers/reducers";

const rootReducer = combineReducers({
    customers,
});

export default rootReducer;