import { Reducer } from "redux";
import { TranslatesState, TranslatesActions } from "./types";
const INITIAL_STATE: TranslatesState = {
  history: [],
  error: false,
  msg: "",
};

const reducer: Reducer<TranslatesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TranslatesActions.LOAD_REQUEST:
      return {
        ...state,
      };
    case TranslatesActions.LOAD_SUCCESS:
      return {
        ...state,
        error: false,
        msg: "",
        history: [
          ...state.history,
          {
            id: state.history.length + 1,
            literal_number: action.payload[0],
            extented_number: action.payload[1],
          },
        ],
      };
    case TranslatesActions.LOAD_FAILURE:
      return {
        ...state,
        msg: action.payload,
        error: true,
      };
    case TranslatesActions.LOAD_RESET:
      state = INITIAL_STATE;
      return {
        ...state,
        msg: "Entries history has been successfully reset",
      };
    default:
      return state;
  }
};

export default reducer;
