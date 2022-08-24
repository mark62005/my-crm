import { all } from "redux-saga/effects";
import customers from "../features/customers/sagas";
import regions from "../features/regions/sagas";

export default function* rootSaga() {
    yield all([
        customers(),
        regions(),
    ]);
}