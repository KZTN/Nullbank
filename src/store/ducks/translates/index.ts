import { Reducer } from "redux";
import { TranslatesState, TranslatesTypes } from "./types";
const INITIAL_STATE: TranslatesState = {
  history: [],
  error: false,
  loading: false,
  msgerror: "",
};

const reducer: Reducer<TranslatesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TranslatesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        msgerror: "",
        history: [...state.history, action.payload.entry],
      };
    case TranslatesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msgerror: action.payload.msgerror,
        history: [...action.history],
      };

    default:
      return state;
  }
};

export default reducer;
