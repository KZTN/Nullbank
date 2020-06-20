import { call, put, takeLatest, all } from "redux-saga/effects";
import { TranslatesActions } from "./types";
import api from "../../../services/api";
import { LoadFailure, LoadSucess } from "./actions";

interface Action {
  type: string;
  payload: {
    literal_number: number;
  };
}

function* request({ payload }: Action): object {
  console.log("o numero literal e " + payload);
  try {
    const response = yield call(api.get, `?translate=${payload}`);
    console.log("o numero por extenso e " + response.data);
    yield put(LoadSucess(response.data));
  } catch (error) {
    yield put(LoadFailure(error));
  }
}

export default all([takeLatest(TranslatesActions.LOAD_REQUEST, request)]);
