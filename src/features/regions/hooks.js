import React from "react";
import { useSelector } from "react-redux";

export const useListRegions = () => {
    return useSelector((state) => state.regions.list.regions);
};
