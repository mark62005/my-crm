import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { keys } from "../../../utilities/constants";
import { get } from "../../../utilities/async_storage";

export function* watchLoadRegions() {
    yield takeLatest(actions.loadRegions.toString(), takeLoadRegions);
}

export function* takeLoadRegions() {
    try {
        const regions = yield get(keys.REGIONS);

        yield delay(500);

        yield put(actions.loadRegionsResult(regions));
    } catch (error) {
        yield put(actions.loadRegionsResult([]));
    }
}
