import { all } from "redux-saga/effects";
import request from "./translates/sagas";

export default function* rootSaga() {
  return yield all([request]);
}
