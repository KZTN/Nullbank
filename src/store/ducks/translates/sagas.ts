import { call, put, takeLatest, all } from "redux-saga/effects";
import { TranslatesActions } from "./types";
import api from "../../../services/api";
import { LoadFailure, LoadSucess } from "./actions";

interface Action {
  type: string;
  payload: number;
}

function* request({ payload }: Action): object {
  console.log("o numero literal e " + payload);
  try {
    const response = yield call(api.get, `?translate=${payload}`);
    yield put(LoadSucess([payload, response.data]));
  } catch (error) {
    console.log(error.response.data);
    yield put(LoadFailure(error.response.data));
  }
}

export default all([takeLatest(TranslatesActions.LOAD_REQUEST, request)]);
