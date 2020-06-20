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
        msgerror: "",
        history: [
          ...state.history,
          { id: 1, extented_number: action.payload, literal_number: 1 },
        ],
      };
    case TranslatesActions.LOAD_FAILURE:
      return {
        ...state,
        msgerror: action.payload,
        history: [...action.history],
      };

    default:
      return state;
  }
};

export default reducer;
