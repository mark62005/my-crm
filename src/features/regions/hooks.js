import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { status } from "../../utilities/constants";
import * as actions from "./reducers";

export const useListRegions = () => {
    return useSelector((state) => state.regions.list.regions);
};
