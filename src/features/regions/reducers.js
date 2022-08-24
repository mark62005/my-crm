import { createSlice } from "@reduxjs/toolkit";
import { regions, status } from "../../utilities/constants";

const {
    PENDING,
    INPROGRESS,
    REQUESTING,
    SUCCESS,
    ERROR,
} = status;

const name = "regions";

const initialState = {
    list: {
        status: PENDING,
        regions,
    },
    error: {
        message: "",
    },
};

const reducers = {
    loadRegions: (state) => {
        state.list.status = REQUESTING;
    },
    loadRegionsResult: (state, { payload }) => {
        state.list.regions = payload;
    },
};

const slice = createSlice({
    name,
    initialState,
    reducers,
});

export const {
    loadRegions,
    loadRegionsResult,
} = slice.actions;

export default slice.reducer;