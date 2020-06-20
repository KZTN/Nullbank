import { Reducer } from "redux";
import { TranslatesState, TranslatesActions } from "./types";
const INITIAL_STATE: TranslatesState = {
  history: [],
  error: false,
  msgerror: "",
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
        msgerror: "",
        history: [
          ...state.history,
          {
            id: Math.random(),
            literal_number: action.payload[0],
            extented_number: action.payload[1],
          },
        ],
      };
    case TranslatesActions.LOAD_FAILURE:
      return {
        ...state,
        msgerror: action.payload,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
